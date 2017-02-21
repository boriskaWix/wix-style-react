import React, { Component, PropTypes } from 'react';
import reactElementToJSXString from 'react-element-to-jsx-string';
import Tabs from '../../src/Tabs';

const items = [{id: 1, title: 'first item'}, {id: 2, title: 'second item'}, {id: 3, title: 'third item'}];

class TabsTemplate extends Component {
  componentDidUpdate(props) {
    props.onChange(reactElementToJSXString(this.getComponent()));
  }

  componentDidMount() {
    this.props.onChange(reactElementToJSXString(this.getComponent()));
  }

  getComponent() {
    const {type} = this.props;
    const {activeId} = this.props;
    const props = {items};

    if (type) {
      props.type = type;
    }

    if (activeId) {
      props.activeId = activeId;
    }

    return <Tabs {...props}/>;
  }

  render() {
    return this.getComponent();
  }
}

TabsTemplate.propTypes = {
  onChange: PropTypes.func.isRequired,
  type: PropTypes.oneOf(Tabs.tabTypes)
};

export default TabsTemplate;
