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
    '&:hover, &.Mui-selected': {
      backgroundColor: 'transparent !important',
    },
  },
  cell: {
    '&:focus,&:focus-within,&.MuiDataGrid-cellCheckbox:focus': {
      backgroundColor: alpha(theme.colors.primary, 0.05),
      outline: 'none !important',
    },
    '&.MuiDataGrid-cellCheckbox .Mui-checked': {
      color: theme.colors.primary,
    },
  },
  columnHeader: {
    '&:focus,&:focus-within': {
      backgroundColor: alpha(theme.colors.primary, 0.05),
      outline: 'none !important',
    },
    '&.MuiDataGrid-columnHeader .Mui-checked': {
      color: theme.colors.primary,
    },
  },
});

export default DataTable;
