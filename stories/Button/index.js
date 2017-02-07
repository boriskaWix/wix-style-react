import React from 'react';
import {storiesOf} from '@kadira/storybook';
import Markdown from '../utils/Components/Markdown';
import CodeExample from '../utils/Components/CodeExample';
import Readme from '../../src/Button/README.md';
import InteractiveCodeExample from '../utils/Components/InteractiveCodeExample';
import ButtonStandard from './ButtonStandard';
import ButtonWhite from './ButtonWhite';
import ButtonIcon from './ButtonIcon';
import ButtonError from './ButtonError';
import ButtonPremium from './ButtonPremium';
import ButtonTransparent from './ButtonTransparent';
import ButtonClose from './ButtonClose';
import ButtonTextLink from './ButtonTextLink';


import ExampleControlled from './ExampleControlled';
import ExampleControlledRaw from '!raw!./ExampleControlled';

storiesOf('5. Buttons', module)
  .add('5.0', () => (
    <div>
      <Markdown source={Readme}/>

      <h1>Example</h1>

      <CodeExample title="Controlled" code={ExampleControlledRaw}>
        <ExampleControlled/>
      </CodeExample>

    </div>
  ))
  .add('5.1 Standard', () => (
    <div>
      <h1>5.1 Standard</h1>
      <InteractiveCodeExample title="Customize a <Button/>">
        <ButtonStandard/>
      </InteractiveCodeExample>
    </div>
  ))
  .add('5.2 White', () => (
    <div>
      <h1>5.2 White</h1>
      <InteractiveCodeExample title="Customize a <Button/>">
        <ButtonWhite/>
      </InteractiveCodeExample>
    </div>
  ))
  .add('5.3 Icon Only', () => (
    <div>
      <h1>5.3 Icon Only</h1>
      <InteractiveCodeExample title="Customize a <Button/>">
        <ButtonIcon/>
      </InteractiveCodeExample>
    </div>
  ))
  .add('5.4 Error', () => (
    <div>
      <h1>5.4 Error</h1>
      <InteractiveCodeExample title="Customize a <Button/>">
        <ButtonError/>
      </InteractiveCodeExample>
    </div>
  ))
  .add('5.5 Premium', () => (
    <div>
      <h1>5.5 Premium</h1>
      <InteractiveCodeExample title="Customize a <Button/>">
        <ButtonPremium/>
      </InteractiveCodeExample>
    </div>
  ))
  .add('5.6 Transparent', () => (
    <div>
      <h1>5.6 Transparent</h1>
      <InteractiveCodeExample title="Customize a <Button/>">
        <ButtonTransparent/>
      </InteractiveCodeExample>
    </div>
  ))
  .add('5.7 Close', () => (
    <div>
      <h1>5.7 Close</h1>
      <InteractiveCodeExample title="Customize a <Button/>">
        <ButtonClose/>
      </InteractiveCodeExample>
    </div>
  ))
  .add('5.8 Text Link', () => (
    <div>
      <h1>5.8 Text Link</h1>
      <InteractiveCodeExample title="Customize a <Button/>">
        <ButtonTextLink/>
      </InteractiveCodeExample>
    </div>
  ));
