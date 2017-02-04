import React, {PropTypes, Component} from 'react';
import classNames from 'classnames';

import Ticker from './Ticker';
import Unit from './Unit';
import Group from './Group';
import InputPrefix from './InputPrefix';
import InputSuffix from './InputSuffix';

import styles from './Input.scss';

class Input extends Component {

  static Ticker = Ticker;
  static Unit = Unit;
  static Group = Group;

  constructor(params) {
    super(params);
    this._onKeyDown = this._onKeyDown.bind(this);
    this._onFocus = this._onFocus.bind(this);
    this._onBlur = this._onBlur.bind(this);
    this._onChange = this._onChange.bind(this);
    this.focus = this.focus.bind(this);
    this.blur = this.blur.bind(this);
    this.select = this.select.bind(this);
  }

  state = {
    focus: false
  };

  componentDidMount() {
    this.props.autoFocus && this._onFocus();
  }

  render() {
    const {
      id,
      theme,
      value,
      forceHover,
      forceFocus,
      placeholder,
      error,
      unit,
      magnifyingGlass,
      menuArrow,
      defaultValue,
      tabIndex,
      onClear,
      rtl,
      autoFocus,
      onKeyUp,
      readOnly,
      size,
      dataHook,
      prefix,
      suffix,
      disabled,
      type,
      errorMessage
    } = this.props;

    const classes = classNames({
      [styles.root]: true,
      [styles[`theme-${theme}`]]: true,
      [styles[`size-${size}`]]: true,
      [styles.rtl]: !!rtl,
      [styles.disabled]: disabled,
      [styles.hasError]: !!error,
      [styles.hasHover]: forceHover,
      [styles.hasFocus]: forceFocus || this.state.focus
    });

    const myAttr = {'data-hook': dataHook};

    return (
      <div className={classes} {...myAttr}>
        <InputPrefix
          disabled={disabled}
          >
          {prefix}
        </InputPrefix>
        <input
          ref={input => this.input = input}
          className={styles.input}
          id={id}
          disabled={disabled}
          defaultValue={defaultValue}
          value={value}
          onChange={this._onChange}
          onFocus={this._onFocus}
          onBlur={this._onBlur}
          onKeyDown={this._onKeyDown}
          onDoubleClick={this._onDoubleClick}
          placeholder={placeholder}
          tabIndex={tabIndex}
          autoFocus={autoFocus}
          onKeyUp={onKeyUp}
          readOnly={readOnly}
          type={type}
          />
        <InputSuffix
          disabled={disabled}
          value={value}
          error={error}
          unit={unit}
          magnifyingGlass={magnifyingGlass}
          menuArrow={menuArrow}
          rtl={rtl}
          onClear={onClear}
          onFocus={this._onFocus}
          errorMessage={errorMessage}
          >
          {suffix}
        </InputSuffix>
        {theme === 'material' && <div className={styles.bar}/>}
      </div>
    );
  }

  focus() {
    this.input && this.input.focus();
  }

  blur() {
    this.input && this.input.blur();
  }

  select() {
    this.input && this.input.select();
  }

  _onFocus() {
    this.setState({focus: true});
    this.props.onFocus && this.props.onFocus();

    if (this.props.autoSelect) {
      // Set timeout is needed here since onFocus is called before react
      // gets the reference for the input (specifically when autoFocus
      // is on. So setTimeout ensures we have the ref.input needed in select)
      setTimeout(() => this.select(), 0);
    }
  }

  _onBlur(e) {
    this.setState({focus: false});
    this.props.onBlur && this.props.onBlur(e);
  }

  _onKeyDown(e) {
    this.props.onKeyDown && this.props.onKeyDown(e);

    if (e.keyCode === 13 /* enter */) {
      this.props.onEnterPressed && this.props.onEnterPressed();
    } else if (e.keyCode === 27 /* esc */) {
      this.props.onEscapePressed && this.props.onEscapePressed();
    }
  }

  _onChange(e) {
    if (this.props.type === 'number' && !(/^\d*$/.test(e.target.value))) {
      return;
    }

    this.props.onChange && this.props.onChange(e);
  }
}

Input.displayName = 'Input';

Input.defaultProps = {
  theme: 'normal',
  size: 'normal',
  errorMessage: ''
};

Input.propTypes = {
  id: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  theme: PropTypes.oneOf(['normal', 'paneltitle', 'material']),
  forceHover: PropTypes.bool,
  forceFocus: PropTypes.bool,
  placeholder: PropTypes.string,
  error: PropTypes.bool,
  unit: PropTypes.string,
  defaultValue: PropTypes.string,
  tabIndex: PropTypes.number,
  magnifyingGlass: PropTypes.bool,
  menuArrow: PropTypes.bool,
  rtl: PropTypes.bool,
  autoFocus: PropTypes.bool,
  autoSelect: PropTypes.bool,
  onChange: PropTypes.func,
  onClear: PropTypes.func,
  onBlur: PropTypes.func,
  onFocus: PropTypes.func,
  onEscapePressed: PropTypes.func,
  onEnterPressed: PropTypes.func,
  onKeyDown: PropTypes.func,
  onKeyUp: PropTypes.func,
  disabled: PropTypes.bool,
  readOnly: PropTypes.bool,
  dataHook: PropTypes.string,
  size: PropTypes.oneOf(['small', 'normal', 'large']),
  prefix: PropTypes.node,
  suffix: PropTypes.node,
  type: PropTypes.node,
  errorMessage: PropTypes.string
};

export default Input;
