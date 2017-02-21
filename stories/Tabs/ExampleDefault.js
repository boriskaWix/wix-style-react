import React from 'react';

import Tabs from '../../src/Tabs/Tabs';

const items = [{id: '1', title: 'first item'}, {id: '2', title: 'second item'}, {id: '3', title: 'third item'}];

export default () =>
  <div>
    <Tabs
      items={items}
      onClick={(item) => {
        alert(`clicked element is: ${JSON.stringify(item)}`)
      }}/>
  </div>;