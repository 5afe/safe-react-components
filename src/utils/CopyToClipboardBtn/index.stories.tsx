import React from 'react';

import CopyToClipboardBtn from './index';

export default {
  title: 'Utils/CopyToClipboardBtn',
  component: CopyToClipboardBtn,
  parameters: {
    componentSubtitle: 'Copy text to clipboard.',
  },
};

export const Copy = (): React.ReactElement => (
  <CopyToClipboardBtn textToCopy="some value" />
);
