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


import ExampleStandard from './ExampleStandard';
import ExampleStandardRaw from '!raw!./ExampleStandard';

import ExampleError from './ExampleError';
import ExampleErrorRaw from '!raw!./ExampleError';

import ExamplePremium from './ExamplePremium';
import ExamplePremiumRaw from '!raw!./ExamplePremium';

import ExampleGreen from './ExampleGreen';
import ExampleGreenRaw from '!raw!./ExampleGreen';

import ExampleTransparent from './ExampleTransparent';
import ExampleTransparentRaw from '!raw!./ExampleTransparent';

import ExampleSizes from './ExampleSizes';
import ExampleSizesRaw from '!raw!./ExampleSizes';

import ExampleControlled from './ExampleControlled';
import ExampleControlledRaw from '!raw!./ExampleControlled';

import ExampleAnimation from './ExampleAnimation';
import ExampleAnimationRaw from '!raw!./ExampleAnimation';

storiesOf('3. Buttons', module)
  .add('3.0 Examples', () => (
    <div>
      <Markdown source={Readme}/>

      <h1>Usage examples</h1>

      <CodeExample title="Standard" code={ExampleStandardRaw}>
        <ExampleStandard/>
      </CodeExample>

      <CodeExample title="Error" code={ExampleErrorRaw}>
        <ExampleError/>
      </CodeExample>

      <CodeExample title="Premium" code={ExamplePremiumRaw}>
        <ExamplePremium/>
      </CodeExample>

      <CodeExample title="Green" code={ExampleGreenRaw}>
        <ExampleGreen/>
      </CodeExample>

      <CodeExample title="Transparent" code={ExampleTransparentRaw}>
        <ExampleTransparent/>
      </CodeExample>

      <CodeExample title="Sizes" code={ExampleSizesRaw}>
        <ExampleSizes/>
      </CodeExample>

      <CodeExample title="Controlled" code={ExampleControlledRaw}>
        <ExampleControlled/>
      </CodeExample>

      <CodeExample title="Animation" code={ExampleAnimationRaw}>
        <ExampleAnimation/>
      </CodeExample>

    </div>
  ))
  .add('3.1 Standard', () => (
    <div>
      <h1>3.1 Standard</h1>
      <InteractiveCodeExample title="Customize a <Button/>">
        <ButtonStandard/>
      </InteractiveCodeExample>
    </div>
  ))
  .add('3.2 White', () => (
    <div>
      <h1>3.1 White</h1>
      <InteractiveCodeExample title="Customize a <Button/>">
        <ButtonWhite/>
      </InteractiveCodeExample>
    </div>
  ))
  .add('3.3 Icon Only', () => (
    <div>
      <h1>3.3 Icon Only</h1>
      <InteractiveCodeExample title="Customize a <Button/>">
        <ButtonIcon/>
      </InteractiveCodeExample>
    </div>
  ))
  .add('3.4 Error', () => (
    <div>
      <h1>3.4 Error</h1>
      <InteractiveCodeExample title="Customize a <Button/>">
        <ButtonError/>
      </InteractiveCodeExample>
    </div>
  ))
  .add('3.5 Premium', () => (
    <div>
      <h1>3.5 Premium</h1>
      <InteractiveCodeExample title="Customize a <Button/>">
        <ButtonPremium/>
      </InteractiveCodeExample>
    </div>
  ))
  .add('3.6 Transparent', () => (
    <div>
      <h1>3.6 Transparent</h1>
      <InteractiveCodeExample title="Customize a <Button/>">
        <ButtonTransparent/>
      </InteractiveCodeExample>
    </div>
  ))
  .add('3.7 Close', () => (
    <div>
      <h1>3.7 Close</h1>
      <InteractiveCodeExample title="Customize a <Button/>">
        <ButtonClose/>
      </InteractiveCodeExample>
    </div>
  ))
  .add('3.8 Text Link', () => (
    <div>
      <h1>3.8 Text Link</h1>
      <InteractiveCodeExample title="Customize a <Button/>">
        <ButtonTextLink/>
      </InteractiveCodeExample>
    </div>
  ));
