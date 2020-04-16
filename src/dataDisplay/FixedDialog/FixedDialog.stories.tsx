import React from 'react';

import FixedDialog from './index';

export default {
  title: 'Data Display/FixedDialog',
  component: FixedDialog,
  parameters: {
    componentSubtitle: ''
  }
};

export const fixedDialog = () => (
  <FixedDialog
    title="Legal Disclaimer"
    body={<div>Some Body</div>}
    onCancel={() => {}}
    onConfirm={() => {}}
  />
);
