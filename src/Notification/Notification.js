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

function getChildren(children) {
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
      hiddenByCloseClick: false,
      hiddenByTimer: false
    };

    this.startCloseTimer()
  }

  startCloseTimer() {
    if (this.props.type === LOCAL_NOTIFICATION) {
      this.closeTimeout = setTimeout(() => this.setState({hiddenByTimer: true}), this.props.timeout || DEFAULT_TIMEOUT);
    }
  }

  hideOnCloseClick() {
    this.setState({
      hiddenByCloseClick: true
    });
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.show) {
      this.setState({
        hiddenByCloseClick: false,
        hiddenByTimer: false
      });

      if(this.closeTimeout) {
        clearTimeout(this.closeTimeout);
        this.closeTimeout = null;
      }
      this.startCloseTimer();
    }
  }

  render() {
    const {
      show,
      type,
      theme,
      size,
      children
    } = this.props;

    const position = type === GLOBAL_NOTIFICATION ? 'relative' : 'fixed';

    const notificationClassName = classNames({
      [css.notificationWrapper]: true,
      [css[`${theme}Theme`]]: true,
      [css[`${size}Size`]]: true,
      [css[`${position}Position`]]: true
    });

    const childrenComponents = getChildren(children);

    /*animation wrapper should replace the first div*/
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
            show && !this.state.hiddenByCloseClick && !this.state.hiddenByTimer ?
              <div data-hook="notification-wrapper" className={notificationClassName}>
                <div className={css.notificationContentWrapper}>
                  <div data-hook="notification-label" className={css.labelWrapper}>
                    {childrenComponents.label}
                  </div>
                  {
                    childrenComponents.ctaButton ?
                      <div data-hook="notification-cta-button" className={css.ctaButtonWrapper}>
                        {childrenComponents.ctaButton}
                      </div> :
                      null
                  }
                </div>
                <div data-hook="notification-close-button" className={css.closeButtonWrapper}
                     onClick={e => this.hideOnCloseClick()}>
                  {childrenComponents.closeButton}
                </div>
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
  children: PropTypes.any //TODO - add specific children?
};

Notification.defaultProps = {
  show: false,
  theme: 'standard',
  size: 'standard', //TODO - I don't like it but we need to set a size for the container to maintain animation
  type: GLOBAL_NOTIFICATION
};

export default Notification;
