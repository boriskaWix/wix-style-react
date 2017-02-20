import React from 'react';
import ReactTestUtils from 'react-addons-test-utils';
import {mount} from 'enzyme';
import {createDriverFactory} from '../test-common';
import tabsDriverFactory from './Tabs.driver';
import Tabs from './Tabs';
import {tabsTestkitFactory} from '../../testkit';
import {tabsTestkitFactory as enzymeTabsTestkitFactory} from '../../testkit/enzyme';

describe('Tabs component', () => {
  it('should exist', () => {
    const driver = createComponent();

    expect(driver.exists()).toBeTruthy();
  });

  const createDriver = createDriverFactory(tabsDriverFactory);
  function createComponent(props) {
    return createDriver(<Tabs {...props}/>);
  }
});

describe('testkit', () => {
  it('should exist', () => {
    const div = document.createElement('div');
    const dataHook = 'myDataHook';
    const wrapper = div.appendChild(ReactTestUtils.renderIntoDocument(<div><Tabs dataHook={dataHook}/></div>));
    const breadcrumbsTestkit = tabsTestkitFactory({wrapper, dataHook});
    expect(breadcrumbsTestkit.exists()).toBeTruthy();
  });
});

describe('enzyme testkit', () => {
  it('should exist', () => {
    const dataHook = 'myDataHook';
    const wrapper = mount(<Tabs dataHook={dataHook}/>);
    const breadcrumbsTestkit = enzymeTabsTestkitFactory({wrapper, dataHook});
    expect(breadcrumbsTestkit.exists()).toBeTruthy();
  });
});
