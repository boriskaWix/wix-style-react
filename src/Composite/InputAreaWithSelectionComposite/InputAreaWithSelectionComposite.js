import React, {Children} from 'react';
import {first, last} from 'lodash/fp';
import WixComponent from '../../WixComponent';
import styles from './InputAreaWithSelectionComposite.scss';

class InputAreaWithSelectionComposite extends WixComponent {
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
        {textInput}
        {selectionInput}
      </div>
    );
  }
}

InputAreaWithSelectionComposite.propTypes = {
  children: React.PropTypes.any
};

InputAreaWithSelectionComposite.displayName = 'InputAreaWithSelectionComposite';

export default InputAreaWithSelectionComposite;
