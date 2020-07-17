import React from 'react';

import StatusDot from './index';

export default {
  title: 'Feedback/StatusDot',
  component: StatusDot,
  parameters: {}
};

export const statusDot = () => (
  <>
    <StatusDot size="sm" color="rinkeby" />
    <br />
    <StatusDot size="md" color="rinkeby" />
  </>
);
