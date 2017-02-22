import React from 'react';
import ReactDOM from 'react-dom';
import ReactTestUtils from 'react-addons-test-utils';
import styles from './RichTextArea.scss';

const richTextAreaDriverFactory = ({element, wrapper, component, componentInstance}) => {
  const getButtons = () => [...element.querySelectorAll('[data-hook*="rich-text-area-button"]')];
  const getButtonType = button => button.getAttribute('data-hook').replace(/^rich-text-area-button-/, '');
  const getButtonByType = type => getButtons().find(button => getButtonType(button) === type);
  const clickButtonByType = type => () => ReactTestUtils.Simulate.mouseDown(getButtonByType(type));

  return {
    exists: () => !!element,
    getButtonTypes: () => getButtons().map(getButtonType),
    clickBoldButton: clickButtonByType('bold'),
    clickItalicButton: clickButtonByType('italic'),
    clickUnderlineButton: clickButtonByType('underline'),
    getContent: () => element.childNodes[1].textContent,
    focus: () => {
      const editorState = componentInstance.state.editorState;
      const newEditorState = editorState
        .transform()
        // .focus()
        .apply();

      componentInstance.setEditorState(newEditorState);
    },
    enterText: text => {
      const editorState = componentInstance.state.editorState;
      const newEditorState = editorState
        .transform()
        .insertText(text)
        .apply();

      componentInstance.setEditorState(newEditorState);
    },
    isErrorIndicatorVisible: () => Boolean(element.classList.contains(styles.withError)),
    setProps: props => {
      const ClonedWithProps = React.cloneElement(component, Object.assign({}, component.props, props), ...(component.props.children || []));
      ReactDOM.render(<div ref={r => element = r}>{ClonedWithProps}</div>, wrapper);
    }
  };
};

export default richTextAreaDriverFactory; 
