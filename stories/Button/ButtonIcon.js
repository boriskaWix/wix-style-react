import React, {Component, PropTypes} from 'react';

import Template from './Template';
import RadioGroup from '../../src/RadioGroup';
import Label from '../../src/Label';
import ToggleSwitch from '../../src/ToggleSwitch';

import styles from './ExampleButton.scss';

class ButtonIcon extends Component {

  static propTypes = {
    onChange: PropTypes.func
  };

  state = {
    disabled: false,
    theme: 'emptybluesecondary',
    iconOnly: true,
    height: 'medium'
  };

  render() {
    let backgroundStyle = 'output-lightblue';
    if (['fullblue', 'transparentwhite'].indexOf(this.state.theme) >= 0) {
      backgroundStyle = 'output-white';
    } else if (['emptybluesecondary-a', 'emptybluesecondary-b'].indexOf(this.state.theme) >= 0) {
      backgroundStyle = 'output-darkblue';
    }

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
                <RadioGroup.Radio value="emptypurple">Grey Background</RadioGroup.Radio>
                <RadioGroup.Radio value="fullblue">Standard Primary</RadioGroup.Radio>
                <RadioGroup.Radio value="transparentwhite">Standard Secondary</RadioGroup.Radio>
                <RadioGroup.Radio value="emptybluesecondary-a">White Primary</RadioGroup.Radio>
                <RadioGroup.Radio value="emptybluesecondary-b">White Secondary</RadioGroup.Radio>
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
            <Label>Size</Label>
            <div className={styles.flex}>
              <RadioGroup
                display="horizontal"
                value={this.state.height}
                onChange={height => this.setState({height})}
              >
                <RadioGroup.Radio value="small">Small</RadioGroup.Radio>
                <RadioGroup.Radio value="medium">Regular</RadioGroup.Radio>
              </RadioGroup>
            </div>
          </div>

        </div>

        <div className={styles[backgroundStyle]}>
          <div className={`${styles[this.state.theme]} ${styles.exampleWrapper}`}>
            <Template {...this.state} onChange={this.props.onChange}/>
          </div>
        </div>
      </from>
    );
  }
}

export default ButtonIcon;
