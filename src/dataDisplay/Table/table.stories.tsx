import React from 'react';

import Table from './index';

export default {
  title: 'Data Display/Table',
  component: Table,
  parameters: {
    componentSubtitle: 'Used to tabular information.'
  }
};

export const section = () => (
  <>
    <Table />
  </>
);
