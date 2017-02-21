import React from 'react'
import { Editor, Raw } from 'slate'
import WixComponent from '../WixComponent';

const initialState = Raw.deserialize({
  nodes: [
    {
      kind: 'block',
      type: 'paragraph',
      nodes: [
        {
          kind: 'text',
          text: 'A line of text in a paragraph.'
        }
      ]
    }
  ]
}, { terse: true });


class RichTextArea extends WixComponent {

  // Set the initial state when the app is first constructed.
  state = {
    state: initialState,
    schema: {
      nodes: {
        code: CodeNode
      }
    }
  };

  // On change, update the app's React state with the new editor state.
  onChange = (state) => {
    this.setState({ state })
  };

  onKeyDown = (event, data, state) => {
    // Return with no changes if it's not the "`" key with cmd/ctrl pressed.
    if (event.which != 191) return

    // Prevent the "`" from being inserted by default.
    event.preventDefault()

    const isCode = state.blocks.some(block => block.type == 'code')

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
        state={this.state.state}
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