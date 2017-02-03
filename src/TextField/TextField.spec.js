import React from 'react';
import ReactTestUtils from 'react-addons-test-utils';
import TextField from '../TextField';
import Input from '../Input';
import Label from '../Label';
import textFieldDriverFactory from './TextField.driver';
import {createDriverFactory} from '../test-common';
import {textFieldTestkitFactory} from '../../testkit';
import {textFieldTestkitFactory as enzymeTextFieldTestkitFactory} from '../../testkit/enzyme';
import {mount} from 'enzyme';

describe('TextField', () => {

  const createDriver = createDriverFactory(textFieldDriverFactory);

  it('should remove label wrapping when label not given', () => {
    const driver = createDriver(<TextField appearance="T1"><Input/></TextField>);
    expect(driver.getNumberOfChildren()).toBe(1);
  });

  it('should render children', () => {
    const driver = createDriver(<TextField appearance="T1"><Label appearance="T1"/><Input/></TextField>);

    expect(driver.getLabel().tagName.toLowerCase()).toBe('label');
    expect(driver.getInput().tagName.toLowerCase()).toBe('input');
  });
});

describe('testkit', () => {
  it('should exist', () => {
    const div = document.createElement('div');
    const dataHook = 'compHook';

    const wrapper = div.appendChild(ReactTestUtils.renderIntoDocument(<div>
      <TextField dataHook={dataHook} appearance="T1">
        <Input/>
      </TextField>
    </div>));

    const textFieldTestkit = textFieldTestkitFactory({wrapper, dataHook});
    expect(textFieldTestkit.exists()).toBeTruthy();
  });

  describe('enzyme testkit', () => {
    it('should exist', () => {
      const dataHook = 'myDataHook';
      const wrapper = mount(<TextField dataHook={dataHook} appearance="T1"><Input/></TextField>);
      const textFieldTestkit = enzymeTextFieldTestkitFactory({wrapper, dataHook});
      expect(textFieldTestkit.exists()).toBeTruthy();
    });
  });
});
