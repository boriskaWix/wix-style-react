import React, {PropTypes, Component} from 'react';
import reactElementToJSXString from 'react-element-to-jsx-string';

import FieldWithSelection from '../../src/Composite/FieldWithSelectionComposite/FieldWithSelectionComposite';
import Input from '../../src/Input';
import Checkbox from '../../src/Checkbox';
import Label from '../../src/Label';
import Dropdown from '../../src/Dropdown';

const options = [
  {id: 1, value: '1'},
  {id: 2, value: '2'},
];


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

    let selectionInput = '';
    switch (this.props.selectionInput) {
      case 'checkbox':
        selectionInput = <Checkbox>Test</Checkbox>;
        break;
      case 'dropdown':
        selectionInput = <Dropdown options={options} dropDirectionUp size="normal" selectedId={1}/>;
        break;
    }

    return (
      <FieldWithSelection error={this.props.error} disabled={this.props.disabled}>
        {this.props.withLabel ? <Label {...this.props.label}/> : null}
        <Input {...this.props.fieldInput}/>
        {selectionInput}
      </FieldWithSelection>
    );
  }

  render() {
    return this.getComponent();
  }
}
