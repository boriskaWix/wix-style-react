import React, {PropTypes, Component} from 'react';
import reactElementToJSXString from 'react-element-to-jsx-string';
import Button from 'wix-style-react/Button';
import {Close} from '../../src/Icons';

export default class Form extends Component {

  static propTypes = {
    onChange: PropTypes.func.isRequired,
    theme: React.PropTypes.string.isRequired,
    disabled: React.PropTypes.bool.isRequired,
    iconOnly: React.PropTypes.bool,
    text: React.PropTypes.string,
    height: React.PropTypes.string,
  };

  componentDidUpdate(props) {
    props.onChange(reactElementToJSXString(this.getComponent()));
  }

  componentDidMount() {
    this.props.onChange(reactElementToJSXString(this.getComponent()));
  }

  getComponent() {
    let iconSize = '12px';
    if (this.props.height === 'small') {
      iconSize = '10px';
    } else if (this.props.height === 'large') {
      iconSize = '14px';
    }

    return (
      <Button
        disabled={this.props.disabled}
        height={this.props.height}
        theme={this.props.theme}
        iconOnly={!!this.props.iconOnly}>
        {this.props.iconOnly ? <Close size={iconSize}/> : this.props.text}
      </Button>
    );
  }

  render() {
    return this.getComponent();
  }
}
