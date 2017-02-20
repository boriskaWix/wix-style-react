import React from 'react';
import ReactTestUtils from 'react-addons-test-utils';

const tabsDriverFactory = ({component}) => {
  return {
    exists: () => !!component,
    getTitles: () => [...component.childNodes].map(childNode => childNode.textContent),
    clickTabAt: index => ReactTestUtils.Simulate.click(component.childNodes[index]),
  };
};

export default tabsDriverFactory;
