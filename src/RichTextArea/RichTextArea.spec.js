import React from 'react';
import {createDriverFactory} from '../test-common';
import richTextAreaDriverFactory from './RichTextArea.driver';
import RichTextArea from './RichTextArea';

describe('RichTextArea', () => {
  let currentValue;

  it('should render value as text', () => {
    const text = 'text content';
    const driver = createComponent({
      value: `<p>${text}</p>`,
    });
    expect(driver.getContent()).toBe(text);
  });

  it('should call callback on change', () => {
    const driver = createComponent();
    const text = 'testing';
    driver.enterText(text);
    expect(currentValue).toBe(`<p>${text}</p>`);
  });

  it('should render buttons specified in props.buttons', () => {
    const buttons = [
      'bold',
      'italic',
      'underline',
      'link',
      'unordered-list',
      'ordered-list',
    ];
    const driver = createComponent({buttons});
    expect(driver.getButtonTypes()).toEqual(buttons);
  });

  it('should handle bold button click', () => {
    const driver = createComponent({buttons: ['bold']});
    driver.clickBoldButton();
    driver.enterText('test');

    expect(currentValue).toEqual('<p><strong>test</strong></p>');
  });

  it('should handle italic button click', () => {
    const driver = createComponent({buttons: ['italic']});
    driver.clickItalicButton();
    driver.enterText('test');

    expect(currentValue).toEqual('<p><em>test</em></p>');
  });

  it('should handle underline button click', () => {
    const driver = createComponent({buttons: ['underline']});
    driver.clickUnderlineButton();
    driver.enterText('test');

    expect(currentValue).toEqual('<p><u>test</u></p>');
  });

  it('should handle unordered-list button click', () => {
    const driver = createComponent({buttons: ['unordered-list']});
    driver.clickUnorderedListButton();
    driver.enterText('test');

    expect(currentValue).toEqual('<ul><li>test</li></ul>');
  });

  it('should handle ordered-list button click', () => {
    const driver = createComponent({buttons: ['ordered-list']});
    driver.clickOrderedListButton();
    driver.enterText('test');

    expect(currentValue).toEqual('<ol><li>test</li></ol>');
  });

  it('should show error indicator', () => {
    const driver = createComponent({error: true});
    expect(driver.isErrorIndicatorVisible()).toBeTruthy();
  });

  it('should render placeholder', () => {
    const driver = createComponent({placeholder: 'HELLO'});
    expect(driver.getContent()).toBe('HELLO');
  });

  it('should be disabled', () => {
    const driver = createComponent({disabled: true});
    expect(driver.isDisabled()).toBeTruthy();
  });

  const createDriver = createDriverFactory(richTextAreaDriverFactory);
  function createComponent(props) {
    const mergedProps = Object.assign({
      onChange: newValue => currentValue = newValue,
    }, props);
    return createDriver(<RichTextArea {...mergedProps}/>);
  }
});
