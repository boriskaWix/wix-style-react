import React, {PropTypes, Children} from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import classNames from 'classnames';
import css from './Notification.scss';

function FirstChild(props) {
  const childrenArray = React.Children.toArray(props.children);
  return childrenArray[0] || null;
}

const getChildren = (children) => {
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
};

class Notification extends React.Component {
  render() {
    const {
      show,
      theme,
      size,
      position,
      children
    } = this.props;

    const notificationClassName = classNames({
      [css.notificationWrapper]: true,
      [css[`${theme}Theme`]]: true,
      [css[`${size}Size`]]: true,
      [css[`${position}Position`]]: true
    });

    const childrenComponents = getChildren(children);

    /*animation wrapper should replace the first div*/
    return (
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
          show ?
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
              <div data-hook="notification-close-button" className={css.closeButtonWrapper}>
                {childrenComponents.closeButton}
              </div>
            </div> :
            null
        }
      </ReactCSSTransitionGroup>
    )
  }
}

Notification.propTypes = {
  show: PropTypes.bool,
  theme: PropTypes.oneOf(['standard', 'error', 'success', 'warning']),
  size: PropTypes.oneOf(['standard', 'big']),
  position: PropTypes.oneOf(['relative', 'fixed']),
  children: PropTypes.any //TODO - add specific children?
};

Notification.defaultProps = {
  show: false,
  theme: 'standard',
  size: 'standard', //TODO - I don't like it but we need to set a size for the container to maintain animation
  position: 'relative'
};

export default Notification;
