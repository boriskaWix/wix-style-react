import React, {PropTypes, Component} from 'react';
import reactElementToJSXString from 'react-element-to-jsx-string';

import Notification from '../../src/Notification';
import Button from '../../src/Button';
import Label from '../../src/Label';
import {Close} from '../../src/Icons';

export default class Form extends Component {

  static propTypes = {
    onChange: PropTypes.func.isRequired,
    show: PropTypes.bool,
    label: PropTypes.object,
    withActionButton: PropTypes.bool,
    actionButton: PropTypes.object
  };

  componentDidUpdate(props) {
    props.onChange(reactElementToJSXString(this.getComponent()));
  }

  componentDidMount() {
    this.props.onChange(reactElementToJSXString(this.getComponent()));
  }

  getComponent() {
    return (
      <Notification show={this.props.show} size={this.props.size}>
        <Label {...this.props.label}>
          Boo! I scared you with this very scary error message!
        </Label>
        {
          this.props.actionButton ?
            <Button {...this.props.actionButton}>
              Thanks
            </Button> :
            null
        }
        <Button height="medium" theme="close-transparent">
          <Close size="6px"/>
        </Button>
      </Notification>
    );
  }

  render() {
    return this.getComponent();
  }
}
