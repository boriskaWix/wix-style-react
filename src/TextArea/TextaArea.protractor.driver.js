import _ from 'lodash/fp';

const textAreaDriverFactory = component => ({
  getLabel: () => component.find('label'),
  getInputArea: () => component.find('textarea'),
  element: () => component
});

export default textAreaDriverFactory;
