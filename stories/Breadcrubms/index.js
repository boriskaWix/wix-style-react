import React from 'react';
import {storiesOf} from '@kadira/storybook';
import CodeExample from '../utils/Components/CodeExample';
import Markdown from '../utils/Components/Markdown';

import Readme from '../../src/Breadcrumbs/README.md';

import ExampleStandardRow from '!raw!../Breadcrubms/ExampleStandard';
import ExampleStandard from '../Breadcrubms/ExampleStandard';

import ExampleSizesRow from '!raw!../Breadcrubms/ExampleSizes';
import ExampleSizes from '../Breadcrubms/ExampleSizes';

import ExampleThemesRow from '!raw!../Breadcrubms/ExampleThemes';
import ExampleThemes from '../Breadcrubms/ExampleThemes';

import ExampleWithNodesRow from '!raw!../Breadcrubms/ExampleWithNodes';
import ExampleWithNodes from '../Breadcrubms/ExampleWithNodes';

import ExampleWithOnClickRow from '!raw!../Breadcrubms/ExampleWithOnClick';
import ExampleWithOnClick from '../Breadcrubms/ExampleWithOnClick';

import ExampleWithChosenActiveElementRaw from '!raw!../Breadcrubms/ExampleWithChosenActiveElement';
import ExampleWithChosenActiveElement from '../Breadcrubms/ExampleWithChosenActiveElement';

import ExampleUsingURLRaw from '!raw!../Breadcrubms/ExampleUsingURL';
import ExampleUsingURL from '../Breadcrubms/ExampleUsingURL';

storiesOf('Core', module)
  .add('Breadcrumbs', () => (
    <div>
      <Markdown source={Readme}/>
      <h1>Breadcrumbs component</h1>
      <CodeExample title="Standard" code={ExampleStandardRow}>
        <ExampleStandard/>
      </CodeExample>

      <CodeExample title="Sizes" code={ExampleSizesRow}>
        <ExampleSizes/>
      </CodeExample>

      <CodeExample title="Example using path factory" code={ExampleUsingURLRaw}>
        <ExampleUsingURL/>
      </CodeExample>

      <CodeExample title="Themes" code={ExampleThemesRow}>
        <ExampleThemes/>
      </CodeExample>

      <CodeExample title="Html node items" code={ExampleWithNodesRow}>
        <ExampleWithNodes/>
      </CodeExample>

      <CodeExample title="On click callback" code={ExampleWithOnClickRow}>
        <ExampleWithOnClick/>
      </CodeExample>

      <CodeExample title="Chosen active element" code={ExampleWithChosenActiveElementRaw}>
        <ExampleWithChosenActiveElement/>
      </CodeExample>
    </div>
  ));
