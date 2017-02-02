import React, {Component, PropTypes} from 'react';

import Template from './Template';
import RadioGroup from '../../src/RadioGroup';
import Label from '../../src/Label';
import Input from '../../src/Input';
import ToggleSwitch from '../../src/ToggleSwitch';

import styles from './ExampleButton.scss';

class ButtonStandard extends Component {

  static propTypes = {
    onChange: PropTypes.func
  };

  state = {
    disabled: false,
    theme: 'fullblue',
    text: 'Click On Me'
  };

  render() {
    return (
      <from className={styles.form}>
        <div className={styles.input}>

          <div className={styles.option}>
            <Label>Type</Label>
            <div className={styles.flex}>
              <RadioGroup
                display="horizontal"
                value={this.state.theme}
                onChange={theme => this.setState({theme})}
              >
                <RadioGroup.Radio value="fullblue">Primary</RadioGroup.Radio>
                <RadioGroup.Radio value="emptyblue">Secondary</RadioGroup.Radio>
                <RadioGroup.Radio value="transparent">Secondary on grey</RadioGroup.Radio>
              </RadioGroup>
            </div>
          </div>

          <div className={styles.option}>
            <Label>Disabled</Label>
            <div className={styles.flex}>
              <ToggleSwitch
                size="small"
                checked={this.state.disabled}
                onChange={() => this.setState({disabled: !this.state.disabled})}
              />
            </div>
          </div>

          <div className={styles.option}>
            <Label>Text</Label>
            <div className={styles.flex}>
              <Input
                size="small"
                value={this.state.text}
                onChange={e => this.setState({text: e.target.value})}
              />
            </div>
          </div>

        </div>

        <div className={styles[this.state.theme === 'transparent' ? 'output-lightblue' : 'output']}>
          <div className={`${styles[this.state.theme]} ${styles.exampleWrapper}`}>
            <Template {...this.state} onChange={this.props.onChange}/>
          </div>
        </div>
      </from>
    );
  }
}

export default ButtonStandard;
