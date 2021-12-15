import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { DataGrid as DataGridMui, DataGridProps } from '@mui/x-data-grid';
import { alpha } from '@material-ui/core/styles/colorManipulator';
import theme from '../../theme';

const DataTable = (props: DataGridProps): React.ReactElement => {
  const classes = useStyles();

  return <DataGridMui classes={classes} {...props} />;
};

const useStyles = makeStyles({
  row: {
    '&:hover': {
      backgroundColor: 'transparent !important',
    },
    '&.MuiDataGrid-row.Mui-selected,&.MuiDataGrid-row.Mui-selected:hover': {
      backgroundColor: 'transparent',
    },
  },
  cell: {
    '&.MuiDataGrid-cellCheckbox .Mui-checked': {
      color: theme.colors.primary,
    },
    '&.MuiDataGrid-cell:focus,&.MuiDataGrid-cell:focus-within,&.MuiDataGrid-cellCheckbox:focus':
      {
        backgroundColor: alpha(theme.colors.primary, 0.05),
        outline: 'none',
      },
  },
  columnHeader: {
    '&.MuiDataGrid-columnHeader .Mui-checked': {
      color: theme.colors.primary,
    },
    '&.MuiDataGrid-columnHeader:focus,&.MuiDataGrid-columnHeader:focus-within':
      {
        backgroundColor: alpha(theme.colors.primary, 0.05),
        outline: 'none',
      },
  },
});

export default DataTable;
