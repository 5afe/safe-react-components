import React from 'react';

import Button from './index';

export default {
  title: 'Inputs/Button',
  component: Button,
  parameters: {
    componentSubtitle: 'Button component'
  }
};

export const button = () => (
  <>
    <div>
      <Button size="md" color="primary" variant="contained">
        text
      </Button>
      <Button size="md" color="secondary" variant="contained">
        text
      </Button>
      <Button size="md" color="error" variant="contained">
        text
      </Button>
    </div>
    <div>
      <Button size="md" color="primary" variant="outlined">
        text
      </Button>
      <Button size="md" color="secondary" variant="outlined">
        text
      </Button>
      <Button size="md" color="error" variant="outlined">
        text
      </Button>
    </div>
  </>
);

export const sizes = () => (
  <>
    <Button size="md" color="primary" variant="contained">
      text
    </Button>
    <Button size="lg" color="primary" variant="contained">
      some text
    </Button>
  </>
);

export const withIcon = () => (
  <>
    <Button
      size="lg"
      iconType="addressBook"
      color="primary"
      onClick={() => alert('click')}>
      text
    </Button>
    <Button size="lg" iconType="addressBook" color="primary" variant="outlined">
      text
    </Button>
    <Button
      size="lg"
      iconType="addressBook"
      color="primary"
      variant="contained">
      text
    </Button>
  </>
);
