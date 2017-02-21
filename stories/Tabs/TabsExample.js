import React, { Component, PropTypes } from 'react';
import RadioGroup from '../../src/RadioGroup';
import Label from '../../src/Label';
import TabsTemplate from './TabsTemplate';

const styles = {};

class TabsExample extends Component {
  state = {
    type: '',
  };

  render() {
    return (
      <div>
        <div className={styles.flex}>
          <RadioGroup
            display="horizontal"
            value={this.state.type}
            onChange={type => this.setState({type})}
          >
            <RadioGroup.Radio value="">Default</RadioGroup.Radio>
            <RadioGroup.Radio value="compact">Compact</RadioGroup.Radio>
            <RadioGroup.Radio value="uniformSide">Uniform (Side)</RadioGroup.Radio>
            <RadioGroup.Radio value="uniformFull">Uniform (Full)</RadioGroup.Radio>
          </RadioGroup>
        </div>
        <TabsTemplate onChange={this.props.onChange} type={this.state.type} activeId={1}/>
      </div>
    );
  }
}

TabsTemplate.propTypes = {
  onChange: PropTypes.func,
};

export default TabsExample;
