import React from 'react';
import TextArea from './TextArea';
import ReactDOM from 'react-dom';
import $ from 'jquery';

const textAreaDriverFactory = ({component, wrapper}) => ({
  exists: () => !!component,
  getLabel: () => $('label', component).get(0),
  getInputArea: () => $('textarea', component).get(0),
  getAttr: attrName => component.getAttribute(attrName),
  getNumberOfChildren: () => component.childElementCount,
  setProps: props => {
    ReactDOM.render(<div ref={r => component = r}><TextArea {...props}/></div>, wrapper);
  }
});

export default textAreaDriverFactory;
