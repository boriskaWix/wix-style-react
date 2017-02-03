import React, {Children} from 'react';
import {first, last} from 'lodash/fp';
import {children, optional, once} from '../Composite';
import Label from '../Label';
import Input from '../Input';
import styles from './TextField.scss';
import WixComponent from '../WixComponent';

class TextField extends WixComponent {
  render() {
    const children = Children.toArray(this.props.children);
    return (
      <div>
        { children.length === 2 ?
          <div className={styles.textFieldLabel}>
            {first(children)}
          </div> : null
        }
        { last(children) }
      </div>
    );
  }
}

TextField.propTypes = {
  children: children(optional(Label), once(Input))
};

TextField.displayName = 'TextField';

export default TextField;
