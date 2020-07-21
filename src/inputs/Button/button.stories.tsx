import React from 'react';

import Button from './index';

export default {
  title: 'Inputs/Button',
  component: Button,
  parameters: {
    componentSubtitle: 'Button component with several variants',
  },
};

export const SimpleButton = (): React.ReactElement => (
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

export const Sizes = (): React.ReactElement => (
  <>
    <Button size="md" color="primary" variant="contained">
      text
    </Button>
    <Button size="lg" color="primary" variant="contained">
      some text
    </Button>
  </>
);

export const withIcon = (): React.ReactElement => (
  <>
    <Button
      size="lg"
      iconType="addressBook"
      color="primary"
      onClick={() => alert('click')}>
      text
    </Button>
    <Button size="lg" iconType="addressBook" color="error" variant="outlined">
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
