import React from 'react';

import Divider from './index';

export default {
  title: 'Data Display/Divider',
  component: Divider,
  parameters: {
    componentSubtitle: 'Used to separate content.',
  },
};

export const Horizontal = (): React.ReactElement => (
  <>
    <div>Some content</div>
    <Divider />
    <div>Some content2</div>
  </>
);

export const Vertical = (): React.ReactElement => (
  <div
    style={{
      display: 'flex',
      height: '150px',
      justifyContent: 'center',
      alignItems: 'center',
    }}>
    <div>Some content</div>
    <Divider orientation="vertical" />
    <div>Some content2</div>
  </div>
);
