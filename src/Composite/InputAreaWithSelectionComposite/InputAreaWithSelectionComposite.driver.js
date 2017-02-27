import React from 'react';
import InputAreaWithSelectionComposite from './InputAreaWithSelectionComposite';
import ReactDOM from 'react-dom';

function isLabel(element) {
  return element.tagName.toLowerCase() === 'label';
}

const inputAreaWithSelectionCompositeDriverFactory = ({component, wrapper}) => {
  const firstChild = component.childNodes[0].childNodes[0];
  const label = isLabel(firstChild) ? firstChild : null;
  const textInput = label ? component.childNodes[1].childNodes[0] : firstChild
  const selectionInput = label ? component.childNodes[2].childNodes[0] : component.childNodes[1].childNodes[0];

  return {
    exists: () => !!component,
    getLabel: () => label.textContent,
    hasLabel: () => !!label,
    hasInput: () => textInput.tagName.toLowerCase() == 'input' || textInput.tagName.toLowerCase() == 'textarea',
    hasSelectionInput: () => selectionInput.tagName.toLowerCase() == 'input' || selectionInput.tagName.toLowerCase() == 'select',
    getAttr: attrName => component.getAttribute(attrName),
    getNumberOfChildren: () => component.childElementCount,
    setProps: props => {
      ReactDOM.render(<div ref={r => component = r}><InputAreaWithSelectionComposite {...props}/></div>, wrapper);
    }
  };
};

export default inputAreaWithSelectionCompositeDriverFactory;
