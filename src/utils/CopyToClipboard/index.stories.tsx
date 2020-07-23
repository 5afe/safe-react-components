import React from 'react';

import CopyToClipboard from './index';

export default {
  title: 'Utils/CopyToClipboard',
  component: CopyToClipboard,
  parameters: {
    componentSubtitle: 'Copy text to clipboard.',
  },
};

export const Copy = (): React.ReactElement => (
  <CopyToClipboard textToCopy="some value" />
);
