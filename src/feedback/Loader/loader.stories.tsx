import React from 'react';

import Loader from './index';

export default {
  title: 'Feedback/Loader',
  component: Loader,
  parameters: {
    componentSubtitle: 'Loader component',
  },
};

export const loader = (): React.ReactElement => (
  <>
    <Loader size="xs" />
    <Loader size="sm" />
    <Loader size="md" />
    <Loader size="lg" />
  </>
);

export const withColor = (): React.ReactElement => (
  <Loader size="sm" color="pending" />
);
