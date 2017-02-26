import React from 'react';
import ReactTestUtils from 'react-addons-test-utils';
import Range from './Range';
import {rangeTestkitFactory} from '../../testkit';
import {rangeTestkitFactory as enzymeRangeTestkitFactory} from '../../testkit/enzyme';
import {mount} from 'enzyme';

describe('Range', () => {
  describe('testkit', () => {
    it('should exist', () => {
      const div = document.createElement('div');
      const dataHook = 'compHook';
      const wrapper = div.appendChild(ReactTestUtils.renderIntoDocument(<div><Range dataHook={datahook}/></div>));
      const textFieldTestkit = rangeTestkitFactory({wrapper, dataHook});
      expect(textFieldTestkit.exists()).toBeTruthy();
    });

    describe('enzyme testkit', () => {
     /* it('should exist', () => {
        const dataHook = 'myDataHook';
        const wrapper = mount(<div><Range/></div>);
        const textFieldTestkit = enzymeRangeTestkitFactory({wrapper, dataHook});
        expect(textFieldTestkit.exists()).toBeTruthy();
      });*/
    });
  });
});
