import React from 'react';

import Button from './index';

export default {
  title: 'Inputs/Button',
  component: Button,
  parameters: {
    componentSubtitle: 'Button component'
  }
};

export const primary = () => (
  <Button size="md" color="primary">
    Success
  </Button>
);
