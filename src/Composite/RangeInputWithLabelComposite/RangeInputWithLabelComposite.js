import React, {Children} from 'react';
import {first, last} from 'lodash/fp';
import WixComponent from '../../WixComponent';
import styles from './RangeInputWithLabelComposite.scss';

class RangeInputWithLabelComposite extends WixComponent {
  render() {
    const children = Children.toArray(this.props.children);
    return (
      <div>
        { children.length === 3 ?
          <div className={styles.label}>
            {first(children)}
          </div> : null
        }
        { children[1] }
        { children[2] }
      </div>
    );
  }
}

RangeInputWithLabelComposite.propTypes = {
  children: React.PropTypes.any
};

RangeInputWithLabelComposite.displayName = 'RangeInputWithLabelComposite';

export default RangeInputWithLabelComposite;
