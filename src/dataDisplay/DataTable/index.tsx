import React from 'react';
import styled from 'styled-components';
import { DataGrid as DataGridMui, DataGridProps } from '@mui/x-data-grid';
import theme from '../../theme';

const StyledDataTable = styled(DataGridMui)`
  .MuiCheckbox-root,
  .MuiCheckbox-colorPrimary.Mui-checked {
    color: ${theme.colors.primary};
  }
`;

const DataTable = (props: DataGridProps): React.ReactElement => {
  return <StyledDataTable {...props} />;
};

export default DataTable;
