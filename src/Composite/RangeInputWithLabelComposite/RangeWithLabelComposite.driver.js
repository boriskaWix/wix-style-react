import React from 'react';
import RangeInputWithLabelComposite from './RangeInputWithLabelComposite';
import ReactDOM from 'react-dom';

const rangeInputWithLabelCompositeDriverFactory = ({component, wrapper}) => {
  const label = component.childNodes[0].childNodes[0];

  return {
    exists: () => !!component,
    getLabel: () => label.textContent,
    hasLabel: () => label.tagName.toLowerCase() === 'label',
    getAttr: attrName => component.getAttribute(attrName),
    getNumberOfChildren: () => component.childElementCount,
    setProps: props => {
      ReactDOM.render(<div ref={r => component = r}><RangeInputWithLabelComposite {...props}/></div>, wrapper);
    }
  };
};

export default rangeInputWithLabelCompositeDriverFactory;
