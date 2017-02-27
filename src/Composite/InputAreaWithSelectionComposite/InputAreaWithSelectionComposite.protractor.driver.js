const InputAreaWithSelectionCompositeDriverFactory = component => ({
  getLabel: () => component.find('label'),
  element: () => component
});

export default InputAreaWithSelectionCompositeDriverFactory;
