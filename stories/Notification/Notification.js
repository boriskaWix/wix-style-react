import React, {PropTypes, Component} from 'react';
import reactElementToJSXString from 'react-element-to-jsx-string';

import Notification from '../../src/Notification';
import {GLOBAL_NOTIFICATION} from '../../src/Notification';

export default class Form extends Component {

  static propTypes = {
    onChange: PropTypes.func.isRequired,
    notification: PropTypes.object,
    withActionButton: PropTypes.bool,
    actionButton: PropTypes.object,
    link: PropTypes.string,
    actionButtonText: PropTypes.string,
  };

  componentDidUpdate(props) {
    props.onChange(reactElementToJSXString(this.getComponent()));
  }

  componentDidMount() {
    this.props.onChange(reactElementToJSXString(this.getComponent()));
  }

  getCtaButton() {
    const props = {};
    if(this.props.actionButton.type === 'textLink' ) {
      props.link = this.props.link;
    }
    return (
      <Notification.ActionButton {...props} type={this.props.actionButton.type}>
        {this.props.actionButtonText}
      </Notification.ActionButton>
    );
  }

  getComponent() {
    const notificationProps = Object.assign({}, this.props.notification);
    if (notificationProps.type === GLOBAL_NOTIFICATION) {
      delete notificationProps.timeout
    }

    return (
      <Notification {...notificationProps}>
        <Notification.TextLabel>
          Boo! I scared you with this very scary error message!
        </Notification.TextLabel>
        {
          this.props.actionButton.type !== 'none' ?
            this.getCtaButton() :
            null
        }
        <Notification.CloseButton/>
      </Notification>
    );
  }

  render() {
    return this.getComponent();
  }
}
