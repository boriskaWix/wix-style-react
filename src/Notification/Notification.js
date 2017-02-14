import React, {PropTypes, Children} from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import classNames from 'classnames';
import css from './Notification.scss';
import WixComponent from "../WixComponent";

export const LOCAL_NOTIFICATION = 'local';
export const GLOBAL_NOTIFICATION = 'global';
export const DEFAULT_TIMEOUT = 6000;

function FirstChild(props) {
  const childrenArray = Children.toArray(props.children);
  return childrenArray[0] || null;
}

function mapChildren(children) {
  const childrenArray = Children.toArray(children);

  if (childrenArray.length === 3) {
    return {
      label: childrenArray[0],
      ctaButton: childrenArray[1],
      closeButton: childrenArray[2]
    }
  } else {
    return {
      label: childrenArray[0],
      closeButton: childrenArray[1]
    }
  }
}

class Notification extends WixComponent {
  closeTimeout;

  constructor(props) {
    super(props);
    this.state = {
      hideByCloseClick: false,
      hideByTimer: false
    };

    this.startCloseTimer()
  }

  startCloseTimer() {
    if (this.props.type === LOCAL_NOTIFICATION) {
      this.closeTimeout = setTimeout(() => {
        this.hideNotificationOnTimeout();
      }, this.props.timeout || DEFAULT_TIMEOUT);
    }
  }

  clearCloseTimeout() {
    if (this.closeTimeout) {
      clearTimeout(this.closeTimeout);
      this.closeTimeout = null;
    }
  }

  hideNotificationOnCloseClick() {
    this.setState({hideByCloseClick: true});
  }

  hideNotificationOnTimeout() {
    this.setState({hideByTimer: true});
  }

  bypassCloseFlags() {
    this.setState({
      hideByCloseClick: false,
      hideByTimer: false
    });
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.show) {
      this.bypassCloseFlags();
      this.clearCloseTimeout();
      this.startCloseTimer();
    }
  }

  shouldShowNotification() {
    return this.props.show && !this.state.hideByCloseClick && !this.state.hideByTimer;
  }

  getWrapperClassNames() {
    const {
      type,
      theme,
      size,
    } = this.props;

    const position = type === GLOBAL_NOTIFICATION ? 'relative' : 'fixed';

    return classNames({
      [css.notificationWrapper]: true,
      [css[`${theme}Theme`]]: true,
      [css[`${size}Size`]]: true,
      [css[`${position}Position`]]: true
    });
  }

  renderLabel(component) {
    return (
      <div data-hook="notification-label" className={css.labelWrapper}>
        {component}
      </div>
    );
  }

  renderActionButton(component) {
    return (
      component ?
        <div data-hook="notification-cta-button"
             className={css.ctaButtonWrapper}>
          {component}
        </div> :
        null
    )
  }

  renderCloseButton(component) {
    return (
      <div data-hook="notification-close-button"
           className={css.closeButtonWrapper}
           onClick={e => this.hideNotificationOnCloseClick()}>
        {component}
      </div>
    )
  }

  render() {
    const {
      zIndex,
      children
    } = this.props;


    const childrenComponents = mapChildren(children);

    return (
      <div>
        <ReactCSSTransitionGroup
          component={FirstChild}
          transitionName={{
            enter: css.notificationAnimationEnter,
            enterActive: css.notificationAnimationEnterActive,
            leave: css.notificationAnimationLeave,
            leaveActive: css.notificationAnimationLeaveActive,
          }}
          transitionEnterTimeout={500}
          transitionLeaveTimeout={350}
        >
          {
            this.shouldShowNotification() ?
              <div data-hook="notification-wrapper"
                   className={this.getWrapperClassNames()}
                   style={{zIndex}}>
                <div className={css.contentWrapper}>
                  {this.renderLabel(childrenComponents.label)}
                  {this.renderActionButton(childrenComponents.ctaButton)}
                </div>
                {this.renderCloseButton(childrenComponents.closeButton)}
              </div> :
              null
          }
        </ReactCSSTransitionGroup>
      </div>
    )
  }
}

Notification.propTypes = {
  show: PropTypes.bool,
  theme: PropTypes.oneOf(['standard', 'error', 'success', 'warning']),
  size: PropTypes.oneOf(['standard', 'big']),
  type: PropTypes.oneOf([GLOBAL_NOTIFICATION, LOCAL_NOTIFICATION]),
  timeout: PropTypes.number,
  zIndex: PropTypes.number,
  children: PropTypes.any
};

Notification.defaultProps = {
  theme: 'standard',
  size: 'standard', //TODO - I don't like it but we need to set a size for the container to maintain animation
  type: GLOBAL_NOTIFICATION
};

export default Notification;
