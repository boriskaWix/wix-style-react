import React from 'react';
import {storiesOf} from '@kadira/storybook';
import Markdown from '../utils/Components/Markdown';

import ReadMe from '../../src/Tabs/README.md';
import ExampleDefault from './ExampleDefault';

storiesOf('6. Navigation', module)
  .add('6.3 Tabs', () => (
    <div>
      <Markdown source={ReadMe}/>
      <ExampleDefault />
    </div>
  ));
