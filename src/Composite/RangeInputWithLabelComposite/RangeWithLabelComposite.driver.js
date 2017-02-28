import React from 'react';
import RangeInputWithLabelComposite from './RangeInputWithLabelComposite';
import ReactDOM from 'react-dom';

const rangeInputWithLabelCompositeDriverFactory = ({component, wrapper}) => {
  const label = component.childNodes[0].childNodes[0];
  const hasLabel = label.tagName.toLowerCase() === 'label';
  const firstInput = hasLabel ? component.childNodes[1].childNodes[0] : component.childNodes[0].childNodes[0];
  const lastInput = hasLabel ? component.childNodes[1].childNodes[1] : component.childNodes[0].childNodes[1];
  return {
    exists: () => !!component,
    getLabel: () => label.textContent,
    hasLabel: () => label.tagName.toLowerCase() === 'label',
    hasInputs: () => !!firstInput && !!lastInput,
    getAttr: attrName => component.getAttribute(attrName),
    getNumberOfChildren: () => hasLabel ? component.childNodes[1].childElementCount : component.childNodes[0].childElementCount,
    setProps: props => {
      ReactDOM.render(<div ref={r => component = r}><RangeInputWithLabelComposite {...props}/></div>, wrapper);
    }
  };
};

export default rangeInputWithLabelCompositeDriverFactory;
