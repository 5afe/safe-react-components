import React from 'react';

import StatusDot from './index';

export default {
  title: 'Feedback/StatusDot',
  component: StatusDot,
  parameters: {},
};

export const SimpleStatusDot = (): React.ReactElement => (
  <>
    <StatusDot size="sm" color="rinkeby" />
    <br />
    <StatusDot size="md" color="rinkeby" />
  </>
);
