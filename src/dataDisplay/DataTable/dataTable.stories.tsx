import React from 'react';
import { GridDensityTypes } from '@mui/x-data-grid';

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
  { id: '1', asset: 'Token 1', amount: '3.5', value: '$10,000.35' },
  { id: '2', asset: 'Token 2', amount: '100', value: '$400,000.23' },
  { id: '3', asset: 'Token 3', amount: '32', value: '$1,000.54' },
  { id: '4', asset: 'Token 4', amount: '3.5', value: '$10,000.35' },
  { id: '5', asset: 'Token 5', amount: '100', value: '$400,000.23' },
  { id: '6', asset: 'Token 6', amount: '32', value: '$1,000.54' },
  { id: '7', asset: 'Token 7', amount: '3.5', value: '$10,000.35' },
  { id: '8', asset: 'Token 8', amount: '100', value: '$400,000.23' },
  { id: '9', asset: 'Token 9', amount: '32', value: '$1,000.54' },
  { id: '10', asset: 'Token 10', amount: '3.5', value: '$10,000.35' },
  { id: '11', asset: 'Token 11', amount: '100', value: '$400,000.23' },
  { id: '12', asset: 'Token 12', amount: '32', value: '$1,000.54' },
  { id: '13', asset: 'Token 13', amount: '3.5', value: '$10,000.35' },
  { id: '14', asset: 'Token 14', amount: '100', value: '$400,000.23' },
  { id: '15', asset: 'Token 15', amount: '32', value: '$1,000.54' },
  { id: '16', asset: 'Token 16', amount: '3.5', value: '$10,000.35' },
];

export const DataGrid = (): React.ReactElement => {
  return (
    <DataTable
      rows={rows}
      columns={columns}
      pageSize={5}
      rowsPerPageOptions={[5]}
      checkboxSelection
      autoHeight
      density={GridDensityTypes.Comfortable}
    />
  );
};
