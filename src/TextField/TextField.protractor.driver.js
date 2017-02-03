import _ from 'lodash/fp';

const textFieldDriverFactory = component => ({
  getLabel: () => component.find('label'),
  getInput: () => component.find('input'),
  element: () => component
});

export default textFieldDriverFactory;
