import React, {Children} from 'react';
import {first, last} from 'lodash/fp';
import WixComponent from '../WixComponent';
import {children, optional, once} from '../Composite';
import Label from '../Label';
import Input from '../InputArea';
import styles from './TextArea.scss';

class TextArea extends WixComponent {
  render() {
    const children = Children.toArray(this.props.children);
    return (
      <div>
        { children.length === 2 ?
          <div className={styles.textAreaLabel}>
            {first(children)}
          </div> : null
        }
        { last(children) }
      </div>
    );
  }
}

TextArea.propTypes = {
  children: children(optional(Label), once(Input))
};

TextArea.displayName = 'TextArea';

export default TextArea;
