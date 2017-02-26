import inputDriverFactory from '../Input/Input.driver';

const rangeDriverFactory = ({component, wrapper}) => {
  const label = component.childNodes[0];
  const input = component.childNodes[1];
  return {
    ...inputDriverFactory({component, wrapper}),
    getInput: () => input,
    hasInput: () => input.childNodes[0].tagName.toLowerCase() === 'input',
    getLabel: () => label,
    hasLabel: () => label.tagName.toLowerCase() === 'label'
  };
};

export default rangeDriverFactory;
