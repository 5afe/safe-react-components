import React from 'react';

import FixedDialog from './index';

export default {
  title: 'Data Display/FixedDialog',
  component: FixedDialog,
  parameters: {
    componentSubtitle: `It shows a Dialog, with a modal look and feels, but only being 
    rendered inside a container instead of taking position absolute.
    `,
  },
};

export const SimpleFixedDialog = (): React.ReactElement => (
  <FixedDialog
    title="Legal Disclaimer"
    body={<div>Some Body</div>}
    onCancel={() => undefined}
    onConfirm={() => undefined}
  />
);
