import React, {Children} from 'react';
import {first} from 'lodash/fp';
import WixComponent from '../../WixComponent';
import styles from './FieldWithSelectionComposite.scss';

class FieldWithSelectionComposite extends WixComponent {
  render() {
    const children = Children.toArray(this.props.children);
    const label = children.length === 3 ? (
      <div className={styles.label}>
        {first(children)}
      </div>) : null;

    const textInput = label ? children[1] : children[0];
    const selectionInput = label ? children[2] : children[1];

    return (
      <div className={styles.wrapper}>
        {label}
        <div className={styles.inputs}>
          {textInput}
          {selectionInput}
        </div>
      </div>
    );
  }
}

FieldWithSelectionComposite.propTypes = {
  children: React.PropTypes.any
};

FieldWithSelectionComposite.displayName = 'FieldWithSelectionComposite';

export default FieldWithSelectionComposite;
