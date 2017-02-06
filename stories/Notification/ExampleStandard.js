import React, {Component, PropTypes} from 'react';

import styles from './ExampleStandard.scss';
import Notification from './Notification';
// import Input from '../../src/Input';
// import Label from '../../src/Label';
// import ToggleSwitch from '../../src/ToggleSwitch';
//

class ExampleStandard extends Component {

  static propTypes = {
    onChange: PropTypes.func
  };

  state = {
    show: false,
    label: {
      appearance: 'T1.4'
    },
    withActionButton: true,
    actionButton: {
      height: 'small',
      theme: 'transparent'
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
      <div className={styles.output}>
        <Notification {...this.state} onChange={this.props.onChange}/>
        <a onClick = {() => this.setState({show: !this.state.show})}>Click To Show</a>
      </div>
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
