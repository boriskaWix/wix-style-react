import React, { PropTypes } from 'react';
import WixComponent from '../WixComponent';

class Tabs extends WixComponent {
  render() {
    const { items, onClick } = this.props;
    const tabs = items.map(item => (
      <li key={item.id} onClick={() => onClick(item)}>{item.title}</li>
    ));

    return <ul>{tabs}</ul>;
  }
}

Tabs.propTypes = {
  items: PropTypes.arrayOf(React.PropTypes.shape({
    id: React.PropTypes.number.isRequired,
    title: React.PropTypes.string.isRequired,
  })).isRequired,
  onClick: PropTypes.func,
};

export default Tabs;
