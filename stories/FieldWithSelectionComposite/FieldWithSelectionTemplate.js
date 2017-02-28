import React, {PropTypes, Component} from 'react';
import reactElementToJSXString from 'react-element-to-jsx-string';

import FieldWithSelection from '../../src/Composite/FieldWithSelectionComposite/FieldWithSelectionComposite';
import Input from '../../src/Input';
import Label from '../../src/Label';

export default class Form extends Component {

  static propTypes = {
    onChange: PropTypes.func.isRequired,
    withLabel: PropTypes.bool,
    label: PropTypes.object,
    fieldInput: PropTypes.object,
    selectionInput: PropTypes.object,
  };

  componentDidUpdate(props) {
    props.onChange(reactElementToJSXString(this.getComponent()));
  }

  componentDidMount() {
    this.props.onChange(reactElementToJSXString(this.getComponent()));
  }

  getComponent() {
    return (
      <FieldWithSelection>
        {this.props.withLabel ? <Label {...this.props.label}/> : null}
        <Input id="first" {...this.props.fieldInput}/>
        <Input id="last" {...this.props.selectionInput}/>
      </FieldWithSelection>
    );
  }

  render() {
    return this.getComponent();
  }
}
