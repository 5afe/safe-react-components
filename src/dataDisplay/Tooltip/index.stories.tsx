import React from 'react';

import { Tooltip } from './index';

export default {
  title: 'Data Display/Tooltip',
  component: Tooltip,
  parameters: {
    componentSubtitle: 'Add a tooltip to any ReactElement passed as a child.',
  },
};

export const Basic = (): React.ReactElement => {
  return (
    <Tooltip title="Some text">
      <span>hover me</span>
    </Tooltip>
  );
};

export const CustomColor = (): React.ReactElement => {
  return (
    <Tooltip
      title="Some text"
      backgroundColor="rinkeby"
      textColor="white"
      arrow>
      <span>hover me</span>
    </Tooltip>
  );
};

export const CustomColorAndArrow = (): React.ReactElement => {
  return (
    <Tooltip
      title="Some text"
      backgroundColor="primary"
      placement="left"
      textColor="white"
      arrow>
      <span>hover me</span>
    </Tooltip>
  );
};

export const CustomSize = (): React.ReactElement => {
  return (
    <Tooltip title="Some text" backgroundColor="white" size="lg" arrow>
      <span>hover me</span>
    </Tooltip>
  );
};
