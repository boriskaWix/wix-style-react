import React from 'react';
import TextField from '../TextField';
import ReactDOM from 'react-dom';
import $ from 'jquery';

const textFieldDriverFactory = ({component, wrapper}) => ({
  exists: () => !!component,
  getLabel: () => $('label', component).get(0),
  getInput: () => $('input', component).get(0),
  getAttr: attrName => component.getAttribute(attrName),
  getNumberOfChildren: () => component.childElementCount,
  setProps: props => {
    ReactDOM.render(<div ref={r => component = r}><TextField {...props}/></div>, wrapper);
  }
});

export default textFieldDriverFactory;
