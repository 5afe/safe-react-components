import React from 'react';

import DataTable from './index';

export default {
  title: 'Data Display/Data Table',
  component: DataTable,
  parameters: {
    componentSubtitle:
      'Advanced tables. Wrapper around Material UI x-data-grid',
    docs: {
      description: {
        component:
          'Check the <a href="https://v4.mui.com/components/data-grid" target="_blank">official DataGrid docs</a> for options and API',
      },
    },
  },
};

const columns = [
  {
    field: 'asset',
    headerName: 'Asset',
    flex: 1,
  },
  {
    field: 'amount',
    headerName: 'Amount',
    sortable: false,
    flex: 1,
  },
  {
    field: 'value',
    headerName: 'Value',
    flex: 1,
  },
];

const rows = [
  { id: '1', asset: 'Ether', amount: '3.5', value: '$10,000.35' },
  { id: '2', asset: 'GNO', amount: '100', value: '$400,000.23' },
  { id: '3', asset: 'Link', amount: '32', value: '$1,000.54' },
];

export const DataGrid = (): React.ReactElement => {
  return (
    <DataTable
      rows={rows}
      columns={columns}
      pageSize={2}
      rowsPerPageOptions={[2]}
      checkboxSelection
      disableSelectionOnClick
      autoHeight
    />
  );
};
