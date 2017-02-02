import React from 'react';
import ReactDOM from 'react-dom';
// import ReactTestUtils from 'react-addons-test-utils';
import Notification from './Notification';

const notificationDriverFactory = ({component, wrapper}) => {
  return {
    exists: () => {
      return !!component;
    },
    setProps: props => {
      ReactDOM.render(<div ref={r => component = r}><Notification {...props}/></div>, wrapper);
    }
  };
};

export default notificationDriverFactory;
