import React from 'react';
import {render} from 'react-dom';
import $ from 'jquery';
import ReactTestUtils from 'react-addons-test-utils';
import RichTextArea from './RichTextArea';
// import styles from './RichTextArea.scss';

const richTextAreaDriverFactory = ({component, wrapper}) => {
  const $component = $(component);

  return {
    exists: () => !!component,
    getContent: () => component.textContent,
    enterText: value => {
      //TODO: implement :)
    },
    setProps: props => render(<div ref={r => component = r.childNodes[0]}><RichTextArea {...props}/></div>, wrapper),
  };
};

export default richTextAreaDriverFactory;
