import React from 'react';

const tabsDriverFactory = ({component, wrapper}) => {
  return {
    exists: () => !!component,
  };
};

export default tabsDriverFactory;
