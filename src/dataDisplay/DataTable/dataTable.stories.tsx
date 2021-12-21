import React from 'react';
import { GridDensityTypes, GridRowsProp } from '@mui/x-data-grid';
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

const COLUMN_CONFIG = [
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

const randomIntFromInterval = (min: number, max: number): number => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const generateTestData = (howMany: number): GridRowsProp => {
  const testData = [];

  for (let index = 0; index < howMany; index++) {
    testData.push({
      id: index,
      asset: `Token ${index}`,
      amount: randomIntFromInterval(1, 100),
      value: `$${randomIntFromInterval(0, 10000)}`,
    });
  }

  return testData;
};

export const DataGrid = (): React.ReactElement => {
  return (
    <DataTable
      rows={generateTestData(5)}
      columns={COLUMN_CONFIG}
      checkboxSelection
      hideFooter
      autoHeight
      density={GridDensityTypes.Comfortable}
    />
  );
};

export const PaginatedDataGrid = (): React.ReactElement => {
  return (
    <DataTable
      rows={generateTestData(20)}
      columns={COLUMN_CONFIG}
      pageSize={5}
      rowsPerPageOptions={[5]}
      disableColumnMenu
      checkboxSelection
      autoHeight
      density={GridDensityTypes.Comfortable}
    />
  );
};
