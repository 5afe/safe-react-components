import React from 'react';

import { Tooltip } from '.';

export default {
  component: Tooltip,
  title: 'Data Display/Tooltip',
  parameters: {
    componentSubtitle: 'Tooltip component.',
  },
};

const hereSpam = <span style={{ borderBottom: '1px dashed black' }}>here</span>;

export const Default = (): React.ReactElement => (
  <div>
    This text has a tooltip{' '}
    <Tooltip title="I am a tooltip!">{hereSpam}</Tooltip>
  </div>
);

export const MultiLineTooltip = (): React.ReactElement => (
  <div>
    This text has a tooltip{' '}
    <Tooltip title="Each bracket consists of a single Ethereum address that places a buy-low and a sell-high order. Everytime the price goes through a bracket and activates both orders, the CMM provider earns the spread">
      {hereSpam}
    </Tooltip>
  </div>
);

export const Interactive = (): React.ReactElement => (
  <div>
    This text has a tooltip{' '}
    <Tooltip
      title={
        <span>
          Contains a <a href="#">link</a>
        </span>
      }
      interactive>
      {hereSpam}
    </Tooltip>
  </div>
);
