import React from 'react';
import RangeInputWithLabelComposite from './RangeInputWithLabelComposite';
import Label from '../../Label';
import Input from '../../Input';
import InputArea from '../../InputArea';
import AutoComplete from '../../AutoComplete';
import textAreaDriverFactory from '../../TextArea/TextArea.driver';
import textFieldDriverFactory from '../../TextField/TextField.driver';
import autoCompleteCompositeDriverFactory from '../../AutoCompleteComposite/AutoCompleteComposite.driver';
import {createDriverFactory} from '../../test-common';

describe('RangeInputWithLabelComposite', () => {
  const createTextAreaDriver = createDriverFactory(textAreaDriverFactory);
  const createTextFieldDriver = createDriverFactory(textFieldDriverFactory);
  const createAutoCompleteDriver = createDriverFactory(autoCompleteCompositeDriverFactory);

  it('should remove label wrapping when label not given', () => {
    const driver = createTextFieldDriver(<RangeInputWithLabelComposite><div><Input/></div><div><Input/></div></RangeInputWithLabelComposite>);
    expect(driver.hasLabel()).toBe(false);
    expect(driver.getNumberOfChildren()).toBe(2);
  });

  it('should render Label with Input', () => {
    const driver = createTextFieldDriver(<RangeInputWithLabelComposite><Label>myLabel</Label><Input/><Input/></RangeInputWithLabelComposite>);
    expect(driver.hasLabel()).toBe(true);
    expect(driver.getLabel()).toBe('myLabel');
    expect(driver.hasInput()).toBe(true);
  });

  it('should render Label with InputArea', () => {
    const driver = createTextAreaDriver(<RangeInputWithLabelComposite><Label/><InputArea/><InputArea/></RangeInputWithLabelComposite>);
    expect(driver.hasLabel()).toBe(true);
    expect(driver.hasInputArea()).toBe(true);
  });

  it('should render Label with AutoComplete', () => {
    const driver = createAutoCompleteDriver(<RangeInputWithLabelComposite><Label/><AutoComplete/><AutoComplete/></RangeInputWithLabelComposite>);
    expect(driver.hasLabel()).toBe(true);
    expect(driver.hasAutoComplete()).toBe(true);
  });
});
