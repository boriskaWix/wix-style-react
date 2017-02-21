import React from 'react'
import { Editor, Raw } from 'slate'
import WixComponent from '../WixComponent';

class RichTextArea extends WixComponent {
  constructor(props) {
    super(props);
    const editorState = Raw.deserialize({
      nodes: [
        {
          kind: 'block',
          type: 'paragraph',
          nodes: [
            {
              kind: 'text',
              text: props.value || ''
            }
          ]
        }
      ]
    }, { terse: true });

    // Set the initial state when the app is first constructed.
    this.state = {
      editorState,
      schema: {
        nodes: {
          code: CodeNode
        }
      }
    };
  }


  // On change, update the app's React state with the new editor state.
  onChange = (state) => {
    this.setState({ state })
  };

  onKeyDown = (event, data, state) => {
    if (event.which != 191) return;

    event.preventDefault();

    const isCode = state.blocks.some(block => block.type == 'code');

    // Toggle the block type depending on `isCode`.
    return state
      .transform()
      .setBlock(isCode ? 'paragraph' : 'code')
      .apply()
  };


  // Render the editor.
  render = () => {
    return (
      <Editor
        schema={this.state.schema}
        state={this.state.editorState}
        onChange={this.onChange}
        onKeyDown={this.onKeyDown}
      />
    )
  };

}

function CodeNode(props) {
  return <pre {...props.attributes}><code>{props.children}</code></pre>
}


export default RichTextArea;