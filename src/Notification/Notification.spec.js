import React from 'react';
import ReactTestUtils from 'react-addons-test-utils';
import notificationDriverFactory from './Notification.driver';
import {createDriverFactory} from '../test-common';
import {notificationTestkitFactory} from '../../testkit';
import Notification from './Notification';
import {notificationTestkitFactory as enzymeNotificationTestkitFactory} from '../../testkit/enzyme';
import {mount} from 'enzyme';

describe('Notification', () => {
  const createDriver = createDriverFactory(notificationDriverFactory);

  it('should verify component exists', () => {
    const driver = createDriver(<Notification/>);
    expect(driver.exists()).toBeTruthy();
  });

  // describe('testkit', () => {
  //   it('should exist', () => {
  //     const div = document.createElement('div');
  //     const dataHook = 'myDataHook';
  //     const wrapper = div.appendChild(ReactTestUtils.renderIntoDocument(<div><Notification dataHook={dataHook}/></div>));
  //     const notificationTestkit = notificationTestkitFactory({wrapper, dataHook});
  //     expect(notificationTestkit.exists()).toBeTruthy();
  //   });
  // });
  //
  // describe('enzyme testkit', () => {
  //   it('should exist', () => {
  //     const dataHook = 'myDataHook';
  //     const wrapper = mount(<Notification dataHook={dataHook}/>);
  //     const notificationTestkit = enzymeNotificationTestkitFactory({wrapper, dataHook});
  //     expect(notificationTestkit.exists()).toBeTruthy();
  //   });
  // });
});
