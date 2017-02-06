import React from 'react';
import notificationDriverFactory from './Notification.driver';
import {createDriverFactory} from '../test-common';
import Notification from './Notification';

import Label from '../Label';
import Button from '../Button';
import {Close} from '../Icons';
// import ReactTestUtils from 'react-addons-test-utils';
// import {notificationTestkitFactory} from '../../testkit';
// import {notificationTestkitFactory as enzymeNotificationTestkitFactory} from '../../testkit/enzyme';
// import {mount} from 'enzyme';

describe('Notification', () => {
  const createDriver = createDriverFactory(notificationDriverFactory);

  describe('Visibility', () => {
    it('should verify component exists', () => {
      const driver = createDriver(<Notification/>);
      expect(driver.exists()).toBeTruthy();
    });

    it('should be visible', () => {
      const driver = createDriver(<Notification show={true}/>);
      expect(driver.visible()).toBeTruthy();
    });

    it('should not be visible', () => {
      const driver = createDriver(<Notification show={false}/>);
      expect(driver.visible()).toBeFalsy();
    });
  });

  describe('Styles', () => {
    it('should support default style', () => {
      const driver = createDriver(<Notification show={true}/>);
      expect(driver.isStandardNotification()).toBeTruthy();
    });

    it('should support standard style', () => {
      const driver = createDriver(<Notification show={true} theme="standard"/>);
      expect(driver.isStandardNotification()).toBeTruthy();
    });

    it('should support error style', () => {
      const driver = createDriver(<Notification show={true} theme="error"/>);
      expect(driver.isErrorNotification()).toBeTruthy();
    });

    it('should support success style', () => {
      const driver = createDriver(<Notification show={true} theme="success"/>);
      expect(driver.isSuccessNotification()).toBeTruthy();
    });

    it('should support warning style', () => {
      const driver = createDriver(<Notification show={true} theme="warning"/>);
      expect(driver.isWarningNotification()).toBeTruthy();
    });
  });

  describe('Sizes', () => {
    it('should have a default size', () => {
      const driver = createDriver(<Notification show={true}/>);
      expect(driver.isStandardSize()).toBeTruthy();
    });

    it('should support standard height', () => {
      const driver = createDriver(<Notification show={true} size="standard"/>);
      expect(driver.isStandardSize()).toBeTruthy();
    });

    it('should support a big height', () => {
      const driver = createDriver(<Notification show={true} size="big"/>);
      expect(driver.isBigSize()).toBeTruthy();
    });
  });

  describe('Content', () => {
    describe('Label', () => {
      it('should show have get a text to show', () => {
        const labelText = 'Label Text';
        const driver = createDriver(
          <Notification show={true}>
            <Label appearance="T1.4">
              {labelText}
            </Label>
          </Notification>
        );
        expect(driver.getLabelText()).toEqual(labelText);
      });
    });

    describe('Action Button', () => {
      it('should have an action button', () => {
        const actionButtonText = 'Action Button Text';
        const driver = createDriver(
          <Notification show={true}>
            <div>label</div>
            <Button height="small" theme="transparent">
              {actionButtonText}
            </Button>
            <div>close button</div>
          </Notification>
        );
        expect(driver.getActionButtonText()).toEqual(actionButtonText);
      });

      it('should not have an action button', () => {
        const driver = createDriver(<Notification show={true}/>);
        expect(driver.hasActionButton()).toBeFalsy();
      });
    });

    describe('Close Button', () => {
      it('should have a close button (with action button)', () => {
        const driver = createDriver(
          <Notification show={true}>
            <div>label</div>
            <div>action</div>
            <Button height="medium" theme="close-transparent">
              <Close size="6px" />
            </Button>
          </Notification>
        );
        expect(driver.hasCloseButton()).toBeTruthy();
      });

      it('should have a close button (without action button)', () => {
        const driver = createDriver(
          <Notification show={true}>
            <div>label</div>
            <Button height="medium" theme="close-transparent">
              <Close size="6px" />
            </Button>
          </Notification>
        );
        expect(driver.hasActionButton()).toBeFalsy();
        expect(driver.hasCloseButton()).toBeTruthy();
      });
    });
  });
  
  describe('Position', () => {
    it('should position it in default position - relative', () => {
      const driver = createDriver(<Notification show={true}/>);
      expect(driver.isRelativelyPositioned()).toBeTruthy();
    });

    it('should position it in given position - relative', () => {
      const driver = createDriver(<Notification show={true} position="relative"/>);
      expect(driver.isRelativelyPositioned()).toBeTruthy();
    });

    it('should position it in given position - fixed', () => {
      const driver = createDriver(<Notification show={true} position="fixed"/>);
      expect(driver.isFixedPositioned()).toBeTruthy();
    });
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
