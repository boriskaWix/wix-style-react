import React, {Children} from 'react';
import WixComponent from '../../WixComponent';
import styles from './RangeInputWithLabelComposite.scss';

class RangeInputWithLabelComposite extends WixComponent {


  render() {
    const children = Children.toArray(this.props.children);
    const label = children.length === 3 ? children[0] : null;
    const firstInput = children.length === 3 ? children[1] : children[0];
    const lastInput = children.length === 3 ? children[2] : children[1];
    return (<div className={styles.wrapper}>
      { label ?
        <div className={styles.label}>
          {label}
        </div> : null
      }
      <div className={styles.inputs}>
        { React.cloneElement(firstInput, {noRightBorderRadius: styles.firstinput})}
        { React.cloneElement(lastInput, {noLeftBorderRadius: styles.lastinput})}
      </div>
    </div>);
  }
}

RangeInputWithLabelComposite.propTypes = {
  children: React.PropTypes.any
};

RangeInputWithLabelComposite.displayName = 'RangeInputWithLabelComposite';

export default RangeInputWithLabelComposite;
