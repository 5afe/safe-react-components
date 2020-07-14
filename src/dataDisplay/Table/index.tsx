import React from 'react';
import TableMui from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Collapse from '@material-ui/core/Collapse';
//import { makeStyles } from '@material-ui/core/styles';
//import styled from 'styled-components';

import { FixedIcon } from '../..';

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
  right = 'right',
  center = 'center'
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

type RowCells = {
  id?: string;
  alignment?: Alignment;
  content: React.ReactNode;
};

export type Row = {
  id: string;
  collapsibleContent?: React.ReactNode;
  cells: RowCells[];
};

type Props = {
  rows: Row[];
  headers?: Header[];
  isCollapsible?: boolean;
  className?: string;
  selectedRowIds?: Set<string>;
  sortedByHeaderId?: string;
  sortDirection?: SortDirection;
  onHeaderClick?: (id: string) => void;
  onRowClick?: (id: string) => void;
};

const getHeaders = (headers: Header[], isCollapsible: boolean): Header[] => {
  if (!isCollapsible) {
    return headers;
  }

  return [
    ...headers,
    {
      id: 'chevron',
      label: ''
    }
  ];
};

const getRowCells = (
  cells: RowCells[],
  isSelected: boolean,
  isCollapsible: boolean
) => {
  if (!isCollapsible) {
    return cells;
  }

  return [
    ...cells,
    {
      alignment: Alignment.center,
      content: isSelected ? (
        <FixedIcon type="chevronUp" />
      ) : (
        <FixedIcon type="chevronDown" />
      )
    }
  ];
};

const Table = ({
  rows,
  headers,
  isCollapsible,
  className,
  selectedRowIds,
  sortedByHeaderId,
  sortDirection,
  onRowClick = () => {},
  onHeaderClick = () => {}
}: Props) => {
  //const classes = useStyles();

  return (
    <TableContainer component={Paper} elevation={3}>
      <TableMui className={className}>
        {/* HEADER CELLS */}
        <TableHead>
          <TableRow>
            {getHeaders(headers || [], isCollapsible || false).map((header) => (
              <TableCell
                key={header.id}
                align={header.alignment || Alignment.left}>
                <TableSortLabel
                  active={sortedByHeaderId === header.id}
                  direction={sortDirection}
                  onClick={() => onHeaderClick(header.id)}>
                  {header.label}
                </TableSortLabel>
              </TableCell>
            ))}
          </TableRow>
        </TableHead>

        {/* TABLE BODY */}
        <TableBody>
          {rows.map((row) => {
            return (
              <>
                <TableRow
                  hover
                  key={row.id}
                  selected={selectedRowIds?.has(row.id)}
                  onClick={() => onRowClick(row.id)}>
                  {getRowCells(
                    row.cells,
                    selectedRowIds?.has(row.id) || false,
                    isCollapsible || false
                  ).map((c, index) => {
                    return (
                      <TableCell
                        key={c.id || index}
                        align={c.alignment || Alignment.left}>
                        {c.content}
                      </TableCell>
                    );
                  })}
                </TableRow>

                {/* Collapsible content */}
                {isCollapsible && (
                  <TableRow>
                    <TableCell
                      style={{ paddingBottom: 0, paddingTop: 0 }}
                      colSpan={6}>
                      <Collapse
                        in={selectedRowIds?.has(row.id)}
                        timeout="auto"
                        unmountOnExit>
                        <Box margin={1}>{row.collapsibleContent}</Box>
                      </Collapse>
                    </TableCell>
                  </TableRow>
                )}
              </>
            );
          })}
        </TableBody>
      </TableMui>
    </TableContainer>
  );
};

export default Table;
