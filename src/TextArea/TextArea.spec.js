import React from 'react';
import ReactTestUtils from 'react-addons-test-utils';
import TextArea from '../TextArea';
import InputArea from '../InputArea';
import Label from '../Label';
import textAreaDriverFactory from './TextArea.driver';
import {createDriverFactory} from '../test-common';
import {textAreaTestkitFactory} from '../../testkit';
import {textAreaTestkitFactory as enzymeTextAreaTestkitFactory} from '../../testkit/enzyme';
import {mount} from 'enzyme';


describe('TextArea', () => {
  const createDriver = createDriverFactory(textAreaDriverFactory);

  it('should remove label wrapping when label not given', () => {
    const driver = createDriver(<TextArea appearance="T1"><InputArea/></TextArea>);
    expect(driver.getNumberOfChildren()).toBe(1);
  });

  it('should render children', () => {
    const driver = createDriver(<TextArea appearance="T1"><Label appearance="T1"/><InputArea/></TextArea>);

    expect(driver.getLabel().tagName.toLowerCase()).toBe('label');
    expect(driver.getInputArea().tagName.toLowerCase()).toBe('textarea');
  });
});

describe('testkit', () => {
  it('should exist', () => {
    const div = document.createElement('div');
    const dataHook = 'compHook';

    const wrapper = div.appendChild(ReactTestUtils.renderIntoDocument(<div>
      <TextArea dataHook={dataHook} appearance="T1">
        <InputArea/>
      </TextArea>
    </div>));

    const textAreaTestkit = textAreaTestkitFactory({wrapper, dataHook});
    expect(textAreaTestkit.exists()).toBeTruthy();
  });

  describe('enzyme testkit', () => {
    it('should exist', () => {
      const dataHook = 'myDataHook';
      const wrapper = mount(<TextArea dataHook={dataHook} appearance="T1"><InputArea/></TextArea>);
      const textAreaTestkit = enzymeTextAreaTestkitFactory({wrapper, dataHook});
      expect(textAreaTestkit.exists()).toBeTruthy();
    });
  });
});
