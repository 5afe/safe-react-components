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
  root: {
    '&.MuiDataGrid-root .MuiDataGrid-row.Mui-selected,&.MuiDataGrid-root  .MuiDataGrid-row.Mui-selected:hover':
      {
        backgroundColor: 'transparent',
      },
    '&.MuiDataGrid-root .MuiDataGrid-cell:focus,&.MuiDataGrid-root .MuiDataGrid-cell:focus-within,&.MuiDataGrid-cellCheckbox:focus,&.MuiDataGrid-root .MuiDataGrid-columnHeader:focus,&.MuiDataGrid-root .MuiDataGrid-columnHeader:focus-within':
      {
        backgroundColor: alpha(theme.colors.primary, 0.05),
        outline: 'none',
      },
  },
  row: {
    '&:hover': {
      backgroundColor: 'transparent !important',
    },
  },
  cell: {
    '&.MuiDataGrid-cellCheckbox .Mui-checked': {
      color: theme.colors.primary,
    },
  },
  columnHeader: {
    '&.MuiDataGrid-columnHeader .Mui-checked': {
      color: theme.colors.primary,
    },
  },
});

export default DataTable;
