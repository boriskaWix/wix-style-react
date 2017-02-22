import React from 'react';
import {render} from 'react-dom';
import ReactTestUtils from 'react-addons-test-utils';
import Tabs from './Tabs';
import styles from './Tabs.scss';

const tabsDriverFactory = ({element, wrapper}) => {
  const getTabs = () => [...element.childNodes];
  return {
    exists: () => !!element,
    getTitles: () => getTabs().map(childNode => childNode.textContent),
    clickTabAt: index => ReactTestUtils.Simulate.click(getTabs()[index]),
    getActiveTabIndex: () => getTabs().findIndex(childNode => childNode.classList.contains(styles.active)),
    isDefaultType: () => Tabs.tabTypes.every(tabType => !element.classList.contains(styles[tabType])),
    isOfType: type => element.classList.contains(styles[type]),
    hasDivider: () => element.classList.contains(styles.hasDivider),
    getTabsWidth: () => new Set(getTabs().map(item => item.style.width)),
    setProps: props => render(<div ref={r => element = r.childNodes[0]}><Tabs {...props}/></div>, wrapper)
  };
};

export default tabsDriverFactory; 
