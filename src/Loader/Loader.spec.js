import React from 'react';
import ReactTestUtils from 'react-addons-test-utils';
import Loader from './Loader';
import loaderDriverFactory from './Loader.driver';
import {createDriverFactory} from '../test-common';
import {loaderTestkitFactory} from '../../testkit';
import {loaderTestkitFactory as enzymeLoaderTestkitFactory} from '../../testkit/enzyme';
import {mount} from 'enzyme';

describe('Loader', () => {
  const createDriver = createDriverFactory(loaderDriverFactory);

  describe('size property', () => {
    it('should create a component with default medium size', () => {
      const driver = createDriver(<Loader/>);
      expect(driver.isMedium()).toEqual(true);
    });

    it('should allow creating a small loader', () => {
      const driver = createDriver(<Loader size="small"/>);
      expect(driver.isSmall()).toEqual(true);
    });

    it('should allow creating a medium loader', () => {
      const driver = createDriver(<Loader size="medium"/>);
      expect(driver.isMedium()).toEqual(true);
    });

    it('should allow creating a large loader', () => {
      const driver = createDriver(<Loader size="large"/>);
      expect(driver.isLarge()).toEqual(true);
    });

  });

  describe('text property', () => {

    it('should create a component with no text by default', () => {
      const driver = createDriver(<Loader/>);
      expect(driver.hasText()).toEqual(false);
    });

    it('should create a component with text', () => {
      const text = 'All computers wait at the same speed';
      const driver = createDriver(<Loader text={text}/>);
      console.log(driver.component().childNodes[0].tagName);
      console.log(driver.component().childNodes[1].className);
      expect(driver.hasText()).toEqual(true);
      expect(driver.getText()).toEqual(text);
    });

  });

  describe('testkit', () => {
    it('should create new driver', () => {
      const div = document.createElement('div');
      const dataHook = 'myDataHook';
      const wrapper = div.appendChild(ReactTestUtils.renderIntoDocument(<div><Loader dataHook={dataHook}/></div>));
      const loaderTestkit = loaderTestkitFactory({wrapper, dataHook});
      expect(loaderTestkit.exists()).toBeTruthy();
    });
  });

  describe('enzyme testkit', () => {
    it('should create new driver', () => {
      const dataHook = 'myDataHook';
      const wrapper = mount(<Loader dataHook={dataHook}/>);
      const loaderTestkit = enzymeLoaderTestkitFactory({wrapper, dataHook});
      expect(loaderTestkit.exists()).toBeTruthy();
    });
  });

});
