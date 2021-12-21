import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { DataGrid as DataGridMui, DataGridProps } from '@mui/x-data-grid';
import theme from '../../theme';

const DataTable = (props: DataGridProps): React.ReactElement => {
  const classes = useStyles();

  return <DataGridMui classes={classes} {...props} />;
};

const useStyles = makeStyles({
  row: {
    '&.Mui-selected': {
      backgroundColor: 'transparent !important',
    },
  },
  cell: {
    '&:focus,&:focus-within,&.MuiDataGrid-cellCheckbox:focus': {
      backgroundColor: 'rgba(0, 0, 0, 0.04)',
      outline: 'none !important',
    },
    '&.MuiDataGrid-cellCheckbox .Mui-checked': {
      color: theme.colors.primary,
    },
  },
  columnHeader: {
    '&:focus,&:focus-within': {
      backgroundColor: 'rgba(0, 0, 0, 0.04)',
      outline: 'none !important',
    },
    '&.MuiDataGrid-columnHeader .Mui-checked': {
      color: theme.colors.primary,
    },
  },
});

export default DataTable;
