import React from 'react';
import FieldWithSelectionComposite from './FieldWithSelectionComposite';
import ReactDOM from 'react-dom';

function isLabel(element) {
  return element.tagName.toLowerCase() === 'label';
}

const fieldWithSelectionCompositeDriverFactory = ({component, wrapper}) => {
  const firstChild = component.childNodes[0].childNodes[0];
  const label = isLabel(firstChild) ? firstChild : null;
  const inputsWrapper = label ? component.childNodes[1] : component.childNodes[0];
  const textInput = label ? inputsWrapper.childNodes[0].childNodes[0] : inputsWrapper.childNodes[0].childNodes[0];
  const selectionInput = label ? inputsWrapper.childNodes[1].childNodes[0] : inputsWrapper.childNodes[1].childNodes[0];

  return {
    exists: () => !!component,
    getLabel: () => label.textContent,
    hasLabel: () => !!label,
    hasInput: () => textInput.tagName.toLowerCase() === 'input' || textInput.tagName.toLowerCase() === 'textarea',
    hasSelectionInput: () => !!selectionInput.tagName,
    getAttr: attrName => component.getAttribute(attrName),
    getNumberOfChildren: () => component.childElementCount,
    setProps: props => {
      ReactDOM.render(<div ref={r => component = r}><FieldWithSelectionComposite {...props}/></div>, wrapper);
    }
  };
};

export default fieldWithSelectionCompositeDriverFactory;
