import React from 'react';
import ReactDOM from 'react-dom';
// import ReactTestUtils from 'react-addons-test-utils';
import Notification from './Notification';

const notificationDriverFactory = ({component, wrapper}) => {
  const classExists = className => component.classList.contains(className);

  return {
    exists: () => !!component,
    visible: () => !!wrapper.querySelector('[data-hook="notification-content"]'),
    isStandardNotification: () => classExists('standardTheme'),
    isErrorNotification: () => classExists('errorTheme'),
    isSuccessNotification: () => classExists('successTheme'),
    isWarningNotification: () => classExists('warningTheme'),
    isStandardSize: () => classExists('standardSize'),
    isBigSize: () => classExists('bigSize'),
    getLabelText: () => wrapper.querySelector('[data-hook="notification-label"]').textContent,
    hasActionButton: () => !!wrapper.querySelector('[data-hook="notification-cta-button"]'),
    getActionButtonText: () => wrapper.querySelector('[data-hook="notification-cta-button"]').textContent,
    hasCloseButton: () => !!wrapper.querySelector('[data-hook="notification-close-button"]'),
    setProps: props => {
      ReactDOM.render(<div ref={r => component = r}><Notification {...props}/></div>, wrapper);
    }
  };
};

export default notificationDriverFactory;
