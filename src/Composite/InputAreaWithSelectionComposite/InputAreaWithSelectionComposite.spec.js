import React from 'react';
import InputAreaWithSelectionComposite from './InputAreaWithSelectionComposite';
import Label from '../../Label';
import Input from '../../Input';
import InputArea from '../../InputArea';
import Checkbox from '../../Checkbox';
import inputAreaWithSelectionCompositeDriverFactory from './InputAreaWithSelectionComposite.driver';
import {createDriverFactory} from '../../test-common';
import AutoComplete from '../../AutoComplete';

describe('InputAreaWithSelectionComposite', () => {
  const createCompositeDriverFactory = createDriverFactory(inputAreaWithSelectionCompositeDriverFactory);

  it('should remove label wrapping when label not given', () => {
    const driver = createCompositeDriverFactory(<InputAreaWithSelectionComposite><Input/><Checkbox/></InputAreaWithSelectionComposite>);
    expect(driver.hasLabel()).toBe(false);
    expect(driver.getNumberOfChildren()).toBe(2);
    expect(driver.hasInput()).toBe(true);
    expect(driver.hasSelectionInput()).toBe(true);
  });

  it('should render Label with Input', () => {
    const driver = createCompositeDriverFactory(<InputAreaWithSelectionComposite><Label>myLabel</Label><Input/><Checkbox/></InputAreaWithSelectionComposite>);
    expect(driver.hasLabel()).toBe(true);
    expect(driver.getLabel()).toBe('myLabel');
    expect(driver.hasInput()).toBe(true);
    expect(driver.hasSelectionInput()).toBe(true);
  });

  it('should render Label with InputArea', () => {
    const driver = createCompositeDriverFactory(<InputAreaWithSelectionComposite><Label/><InputArea/><Checkbox/></InputAreaWithSelectionComposite>);
    expect(driver.hasLabel()).toBe(true);
    expect(driver.hasInput()).toBe(true);
    expect(driver.hasSelectionInput()).toBe(true);
  });

  it('should render Label with AutoComplete', () => {
    const driver = createCompositeDriverFactory(<InputAreaWithSelectionComposite><Label/><AutoComplete/><Checkbox/></InputAreaWithSelectionComposite>);
    expect(driver.hasLabel()).toBe(true);
    expect(driver.hasSelectionInput()).toBe(true);
  });
});
