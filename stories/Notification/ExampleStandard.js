import React, {Component, PropTypes} from 'react';

import styles from './ExampleStandard.scss';
import Notification from './Notification';
import Label from '../../src/Label';
import ToggleSwitch from '../../src/ToggleSwitch';
import RadioGroup from '../../src/RadioGroup';

class ExampleStandard extends Component {

  static propTypes = {
    onChange: PropTypes.func
  };

  state = {
    notification: {
      show: true,
      type: 'global',
      size: 'big',
      theme: 'standard'
    },
    label: {
      appearance: 'T1.2'
    },
    actionButton: {
      show: true,
      type: 'button'
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

  setNotificationSize(actionButtonIsShown, actionButtonType) {
    const size = actionButtonIsShown && actionButtonType === 'button' ? 'big' : 'standard';
    this.setComponentState('notification', {size});
  }

  render() {
    return (
      <form className={styles.form}>
        <div className={styles.output}>
          <Notification {...this.state} onChange={this.props.onChange}/>
        </div>
        <div className={styles.input}>
          <div className={styles.option}>
            <Label>Show Notification</Label>
            <div className={styles.flex}>
              <ToggleSwitch
                size="small"
                checked={this.state.notification.show}
                onChange={() => this.setComponentState('notification', {show: !this.state.notification.show})}
              />
            </div>
          </div>
          <div className={styles.option}>
            <Label>Type</Label>
            <div className={styles.flex}>
              <RadioGroup
                display="horizontal"
                value={this.state.notification.type}
                onChange={type => this.setComponentState('notification', {type})}
              >
                <RadioGroup.Radio value="global">Global (push the content)</RadioGroup.Radio>
                <RadioGroup.Radio value="local">Local (on top of the content)</RadioGroup.Radio>
              </RadioGroup>
            </div>
          </div>
          <div className={styles.option}>
            <Label>Theme</Label>
            <div className={styles.flex}>
              <RadioGroup
                display="horizontal"
                value={this.state.notification.theme}
                onChange={theme => this.setComponentState('notification', {theme})}
              >
                <RadioGroup.Radio value="standard">Standard</RadioGroup.Radio>
                <RadioGroup.Radio value="error">Error</RadioGroup.Radio>
                <RadioGroup.Radio value="success">Success</RadioGroup.Radio>
                <RadioGroup.Radio value="warning">Warning</RadioGroup.Radio>
              </RadioGroup>
            </div>
          </div>
          <div className={styles.option}>
            <Label>Action Button</Label>
            <div className={styles.flex}>
              <ToggleSwitch
                size="small"
                checked={this.state.actionButton.show}
                onChange={show => {
                  this.setComponentState('actionButton', {show: !this.state.actionButton.show});
                  this.setNotificationSize(!this.state.actionButton.show, this.state.actionButton.type);
                }}
              />
            </div>
          </div>
          <div className={styles.option}>
            <Label>Theme</Label>
            <div className={styles.flex}>
              <RadioGroup
                display="horizontal"
                value={this.state.actionButton.type}
                onChange={type => {
                  this.setComponentState('actionButton', {type});
                  this.setNotificationSize(this.state.actionButton.show, type);
                }}
              >
                <RadioGroup.Radio value="button">Button</RadioGroup.Radio>
                <RadioGroup.Radio value="textLink">TextLink</RadioGroup.Radio>
              </RadioGroup>
            </div>
          </div>
        </div>
      </form>
    );
    // return (
    //   <from className={styles.form}>
    //     <div className={styles.input}>
    //       <div className={styles.option}>
    //         <Label>Show label</Label>
    //         <div className={styles.flex}>
    //           <Input
    //             size="small"
    //             value={this.state.label.children}
    //             onChange={e => this.setComponentState('label', {children: e.target.value})}
    //             />&nbsp;
    //           <ToggleSwitch
    //             size="small"
    //             checked={this.state.withLabel}
    //             onChange={() => this.setState({withLabel: !this.state.withLabel})}
    //             />
    //         </div>
    //       </div>
    //       <div className={styles.option}>
    //         <Label>Placeholder</Label>
    //         <div className={styles.flex}>
    //           <Input size="small"
    //             value={this.state.inputArea.placeholder}
    //             onChange={e => this.setComponentState('inputArea', {placeholder: e.target.value})}
    //             />
    //         </div>
    //       </div>
    //       <div className={styles.option}>
    //         <Label>Input Area box size</Label>
    //         <div className={styles.column}>
    //           <Input size="small" type="number"
    //                  placeholder="Set #rows"
    //                  value={this.state.inputArea.rows}
    //                  onChange={e => this.setComponentState('inputArea', {rows: e.target.value})}
    //           />
    //           <Input placeholder="Set min Height" size="small" type="number" unit="px"
    //                  value={this.state.inputArea.minHeight}
    //                  onChange={e => this.setComponentState('inputArea', {minHeight: e.target.value})}
    //           />
    //           <Input placeholder="Set max Height" size="small" type="number" unit="px"
    //                  value={this.state.inputArea.maxHeight}
    //                  onChange={e => this.setComponentState('inputArea', {maxHeight: e.target.value})}
    //           />
    //           <div className={styles.option}>
    //             <Label>Resizable: </Label>
    //             <ToggleSwitch
    //               size="small"
    //               checked={this.state.inputArea.resizable}
    //               onChange={() => this.setComponentState('inputArea', {resizable: !this.state.inputArea.resizable})}
    //             />
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //     <div className={styles.output}>
    //       <Notification {...this.state} onChange={this.props.onChange}/>
    //     </div>
    //   </from>
    // );
  }
}

export default ExampleStandard;
