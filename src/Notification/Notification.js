import React, {PropTypes, Children} from 'react';
import classNames from 'classnames';
import css from './Notification.scss';

const getChildren = (children) => {
  const childrenArray = Children.toArray(children);

  if(childrenArray.length === 3) {
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
      children
    } = this.props;

    const className = classNames({
      [css[`${theme}Theme`]]: true,
      [css[`${size}Size`]]: true,
    });

    const childrenComponents = getChildren(children);

    return (
      <div className={className}>
        {
          /*Here the animation wrapper will be*/
          show ?
            <div data-hook="notification-content">
              {
                childrenComponents.label ?
                  <div data-hook="notification-label">
                    {childrenComponents.label}
                  </div> :
                  null
              }
              {
                childrenComponents.ctaButton ?
                  <div data-hook="notification-cta-button">
                    {childrenComponents.ctaButton}
                  </div> :
                  null
              }
              {
                childrenComponents.closeButton ?
                  <div data-hook="notification-close-button">
                    {childrenComponents.closeButton}
                  </div> :
                  null
              }
            </div> :
            null
        }
      </div>
    )
  }
}

Notification.propTypes = {
  show: PropTypes.bool,
  theme: PropTypes.oneOf(['standard', 'error', 'success', 'warning']),
  children: PropTypes.any //TODO - add specific children?
};

Notification.defaultProps = {
  show: false,
  theme: 'standard',
  size: 'standard'
};

export default Notification;
