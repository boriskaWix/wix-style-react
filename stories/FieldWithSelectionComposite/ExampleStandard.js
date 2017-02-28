import React, {Component, PropTypes} from 'react';

import FieldWithSelectionTemplate from './FieldWithSelectionTemplate';
import Input from '../../src/Input';
import Label from '../../src/Label';
import ToggleSwitch from '../../src/ToggleSwitch';

import styles from './ExampleStandard.scss';

class ExampleStandard extends Component {

  static propTypes = {
    onChange: PropTypes.func
  };


  state = {
    withLabel: true,
    prefixSuffixValue: '',
    prefixUnit: '',
    prefixTicker: false,
    suffixUnit: '',
    suffixTicker: false,
    label: {
      appearance: 'T1.1',
      children: 'Field With Selection Label'
    },
    firstInput: {
      placeholder: '0',
      resizable: false,
      borderRadius: 0
    },
    lastInput: {
      placeholder: '0',
      resizable: false
    }
  };

  setComponentState(componentName, obj) {
    this.setState(prevState => {
      prevState[componentName] = {...this.state[componentName], ...obj};
      Object.keys(prevState[componentName])
        .forEach(k => !prevState[componentName][k] && delete prevState[componentName][k]);
      return prevState;
    });
  }

  render() {
    return (
      <from className={styles.form}>
        <div className={styles.input}>
          <div className={styles.option}>
            <Label>Show label</Label>
            <div className={styles.flex}>
              <Input
                size="small"
                value={this.state.label.children}
                onChange={e => this.setComponentState('label', {children: e.target.value})}
                />&nbsp;
              <ToggleSwitch
                size="small"
                checked={this.state.withLabel}
                onChange={() => this.setState({withLabel: !this.state.withLabel})}
                />
            </div>
          </div>
        </div>
        <div className={styles.output}>
          <FieldWithSelectionTemplate {...this.state} onChange={this.props.onChange}/>
        </div>
      </from>
    );
  }
}

export default ExampleStandard;
