import React from 'react';
import {storiesOf} from '@kadira/storybook';
import CodeExample from '../utils/Components/CodeExample';
import ExampleHeadersTypography from './ExampleHeadersTypography';
import ExampleTextTypography from './ExampleTextTypography';

import ExampleHeaderTypographyRaw from '!raw!./ExampleHeadersTypography';
import ExampleTextTypographyRaw from '!raw!./ExampleTextTypography';

storiesOf('Common', module)
  .add('Typography', () => (
    <div>
      <h1>Typography</h1>
      <CodeExample title="Headers" code={ExampleHeaderTypographyRaw}>
        <ExampleHeadersTypography/>
      </CodeExample>
      <CodeExample title="Text" code={ExampleTextTypographyRaw}>
        <ExampleTextTypography/>
      </CodeExample>
    </div>
  ));
