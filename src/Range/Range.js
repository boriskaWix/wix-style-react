import React from 'react';
import {children, optional, once, multiple} from '../Composite';
import Label from '../Label';
import Input from '../Input';

const Range = ({...props, children}) => (
  <div>
    <Label
      appearance="T1.1"
      for="firstName"
    >
      First name
    </Label>
    <Input
      id="firstName"
      placeholder="Please type in your first name..."
      theme="normal"
    />
    <Input
      id="firstName"
      placeholder="Please type in your first name..."
      theme="normal"
    />
  </div>
);

Range.propTypes = {
  children: children(optional(Label), once(Input), once(Input))
};

Range.displayName = 'Range';

export default Range;
