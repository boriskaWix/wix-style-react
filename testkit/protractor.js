import {protractorTestkitFactoryCreator} from '../src/test-common';

import labelDriverFactory from '../src/Label/Label.protractor.driver';
export const labelTestkitFactory = protractorTestkitFactoryCreator(labelDriverFactory);

import buttonDriverFactory from '../src/Button/Button.protractor.driver';
export const buttonTestkitFactory = protractorTestkitFactoryCreator(buttonDriverFactory);

import textAreaDriverFactory from '../src/TextArea/TextArea.driver';
export const textAreaTestkitFactory = protractorTestkitFactoryCreator(textAreaDriverFactory);

import textFieldDriverFactory from '../src/TextField/TextField.driver';
export const textFieldTestkitFactory = protractorTestkitFactoryCreator(textFieldDriverFactory);

export {protractorToastTestkitFactory} from '../src/Toast/testkit/Toast.protractor';
