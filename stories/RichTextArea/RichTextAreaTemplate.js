import React, { Component, PropTypes } from 'react';
import reactElementToJSXString from 'react-element-to-jsx-string';
import RichTextArea from '../../src/RichTextArea';

class RichTextAreaTemplate extends Component {
  componentDidUpdate(props) {
    props.onChange(reactElementToJSXString(this.getComponent()));
  }

  componentDidMount() {
    this.props.onChange(reactElementToJSXString(this.getComponent()));
  }

  getComponent() {
    return <RichTextArea/>;
  }

  render() {
    return this.getComponent();
  }
}

RichTextAreaTemplate.propTypes = {
  onChange: PropTypes.func.isRequired,
};

export default RichTextAreaTemplate;
