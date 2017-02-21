import React from 'react';
import {createDriverFactory} from '../test-common';
import richTextAreaDriverFactory from './RichTextArea.driver';
import RichTextArea from './RichTextArea';

describe('RichTextArea', () => {
  it('should exist', () => {
    const driver = createComponent();
    expect(driver.exists()).toBeTruthy();
  });

  it('should render value as text', () => {
    const value = 'text content';
    const driver = createComponent({
      value
    });
    expect(driver.getContent()).toBe(value);
  });

  const createDriver = createDriverFactory(richTextAreaDriverFactory);
  function createComponent(props) {
    return createDriver(<RichTextArea {...props}/>);
  }
});
