import React from 'react';

import Icon from './index';

export default {
  title: 'Data Display/Icon',
  component: Icon,
  parameters: {
    componentSubtitle: 'The Icon component'
  }
};

export const icons = () => (
  <>
    <Icon alt="icon" size="sm" type="error" />
    <Icon alt="icon" size="sm" type="alert" />
    <Icon alt="icon" size="sm" type="info" />
    <Icon alt="icon" size="sm" type="check" />
  </>
);

export const customUrl = () => (
  <>
    <Icon
      alt="icon"
      size="sm"
      customUrl="https://compound.finance/images/compound-mark.svg"
    />
  </>
);

export const customSize = () => (
  <>
    <Icon alt="icon" size="sm" type="info" />
    <Icon alt="icon" size="md" type="info" />
  </>
);
