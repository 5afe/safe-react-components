import React from 'react';
//import { makeStyles } from '@material-ui/core/styles';
import TableMui from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
// import Box from '@material-ui/core/Box';
// import Collapse from '@material-ui/core/Collapse';
// import IconButton from '@material-ui/core/IconButton';
//import styled from 'styled-components';

// import theme from '../../theme';
//import Icon from '../Icon';
//import Text from '../Text';

// const useStyles = makeStyles({
//   table: {
//     //  minWidth: 450
//     // '& .MuiTableRow-root:hover': {
//     //   backgroundColor: theme.colors.background,
//     //   cursor: 'pointer'
//     // },
//   }
// });

// const TextTHead = styled(Text)`
//   text-transform: uppercase;
// `;

// const StyledTableCell = styled(TableCell)`
//   border-bottom: 2px solid ${({ theme }) => theme.colors.separator} !important;
// `;

export enum Alignment {
  left = 'left',
  right = 'right'
}

export enum SortDirection {
  asc = 'asc',
  desc = 'desc'
}

export type Header = {
  id: string;
  alignment?: Alignment;
  label: string;
};

export type Row = {
  id: string;
  cells: Array<{
    id?: string;
    alignment?: Alignment;
    content: React.ReactNode;
  }>;
};

type Props = {
  headers?: Header[];
  rows: Row[];
  className?: string;
  selectedRowIds?: Set<string>;
  sortedByHeaderId?: string;
  sortDirection?: SortDirection;
  onHeaderClick?: (id: string) => void;
  onRowClick?: (id: string) => void;
};

const Table = ({
  headers,
  rows,
  className,
  selectedRowIds,
  sortedByHeaderId,
  sortDirection,
  onHeaderClick
}: Props) => {
  //const classes = useStyles();

  return (
    <TableContainer component={Paper} elevation={3}>
      <TableMui className={className}>
        {/* HEADER CELLS */}
        <TableHead>
          <TableRow>
            {headers?.map((header) => (
              <TableCell
                key={header.id}
                align={header.alignment || Alignment.left}>
                <TableSortLabel
                  active={sortedByHeaderId === header.id}
                  direction={sortDirection}
                  onClick={() => onHeaderClick && onHeaderClick(header.id)}>
                  {header.label}
                </TableSortLabel>
              </TableCell>
            ))}
          </TableRow>
        </TableHead>

        {/* TABLE BODY */}
        <TableBody>
          {rows.map((row) => (
            <TableRow hover key={row.id} selected={selectedRowIds?.has(row.id)}>
              {row.cells.map((c, index) => (
                <TableCell
                  key={c.id || index}
                  align={c.alignment || Alignment.left}>
                  {c.content}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </TableMui>
    </TableContainer>
  );
};

export default Table;
