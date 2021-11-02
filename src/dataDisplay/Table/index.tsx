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

//import styled from 'styled-components';

import { FixedIcon } from '../..';

// const TextTHead = styled(Text)`
//   text-transform: uppercase;
// `;

// const StyledTableCell = styled(TableCell)`
//   border-bottom: 2px solid ${({ theme }) => theme.colors.separator} !important;
// `;

export enum TableAlignment {
  left = 'left',
  right = 'right',
  center = 'center',
}

export enum TableSortDirection {
  asc = 'asc',
  desc = 'desc',
}

export type TableHeader = {
  id: string;
  alignment?: TableAlignment;
  label: string;
  hideSortIcon?: boolean;
};

type RowCells = {
  id?: string;
  alignment?: TableAlignment;
  content: React.ReactNode;
};

export type TableRow = {
  id: string;
  collapsibleContent?: React.ReactNode;
  cells: RowCells[];
};

type Props = {
  rows: TableRow[];
  headers?: TableHeader[];
  isCollapsible?: boolean;
  className?: string;
  selectedRowIds?: Set<string>;
  sortedByHeaderId?: string;
  sortDirection?: TableSortDirection;
  onHeaderClick?: (id: string) => void;
  onRowClick?: (id: string) => void;
  isStickyHeader?: boolean;
  maxHeight?: number;
};

const getHeaders = (
  headers: TableHeader[],
  isCollapsible: boolean
): TableHeader[] => {
  if (!isCollapsible) {
    return headers;
  }

  return [
    ...headers,
    {
      id: 'chevron',
      label: '',
    },
  ];
};

const getRowCells = (
  cells: RowCells[],
  isSelected: boolean,
  isCollapsible: boolean
): RowCells[] => {
  if (!isCollapsible) {
    return cells;
  }

  return [
    ...cells,
    {
      alignment: TableAlignment.center,
      content: isSelected ? (
        <FixedIcon type="chevronUp" />
      ) : (
        <FixedIcon type="chevronDown" />
      ),
    },
  ];
};

export const Table = ({
  rows,
  headers,
  isCollapsible = false,
  isStickyHeader = false,
  maxHeight,
  className,
  selectedRowIds = new Set(),
  sortedByHeaderId,
  sortDirection,
  onRowClick = () => undefined,
  onHeaderClick,
}: Props): React.ReactElement => (
  <TableContainer
    style={maxHeight ? { maxHeight: maxHeight } : undefined}
    component={Paper}
    elevation={3}>
    <TableMui stickyHeader={isStickyHeader} className={className}>
      {/* HEADER CELLS */}
      {headers && (
        <TableHead>
          <TableRow>
            {getHeaders(headers || [], isCollapsible).map((header) => (
              <TableCell
                key={header.id}
                align={header.alignment || TableAlignment.left}>
                {onHeaderClick ? (
                  <TableSortLabel
                    active={sortedByHeaderId === header.id}
                    direction={sortDirection}
                    onClick={() => onHeaderClick(header.id)}
                    hideSortIcon={header.hideSortIcon}>
                    {header.label}
                  </TableSortLabel>
                ) : (
                  header.label
                )}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
      )}

      {/* TABLE BODY */}
      <TableBody>
        {rows.map((row) => {
          const rowCells = getRowCells(
            row.cells,
            selectedRowIds.has(row.id),
            isCollapsible
          );

          return (
            <React.Fragment key={row.id}>
              <TableRow
                hover
                selected={selectedRowIds.has(row.id)}
                onClick={() => onRowClick(row.id)}>
                {rowCells.map((c, index) => (
                  <TableCell
                    key={c.id || `cell${index}`}
                    align={c.alignment || TableAlignment.left}>
                    {c.content}
                  </TableCell>
                ))}
              </TableRow>

              {/* Collapsible content */}
              {isCollapsible && (
                <TableRow>
                  <TableCell
                    colSpan={rowCells.length}
                    style={{ paddingBottom: 0, paddingTop: 0 }}>
                    <Collapse
                      in={selectedRowIds.has(row.id)}
                      timeout="auto"
                      unmountOnExit>
                      <Box margin={1}>{row.collapsibleContent}</Box>
                    </Collapse>
                  </TableCell>
                </TableRow>
              )}
            </React.Fragment>
          );
        })}
      </TableBody>
    </TableMui>
  </TableContainer>
);
