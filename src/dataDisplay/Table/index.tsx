import React from 'react';
import TableMui from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Box from '@material-ui/core/Box';
import Collapse from '@material-ui/core/Collapse';
import { rgba } from 'polished';

import styled from 'styled-components';

import { FixedIcon } from '../..';
import Text from '../Text';

const StyledTableContainer = styled(TableContainer)`
  box-shadow: 1px 2px 10px 0
    ${({ theme }) => rgba(theme.colors.shadow.color, 0.15)};
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.white};
`;

const StyledTableMui = styled(TableMui)`
  .MuiTableCell-root {
    font-family: ${({ theme }) => theme.fonts.fontFamily};
  }
`;

const StyledTableHead = styled(TableHead)`
  && {
    border-bottom: 2px solid ${({ theme }) => theme.colors.separator};
  }
`;

const StyledTableRow = styled(TableRow)`
  && {
    border-bottom: 2px solid ${({ theme }) => theme.colors.separator};

    &:first-child {
      border-top: 0;
    }
    &:last-child {
      border-bottom: 0;
    }

    &.MuiTableRow-hover:hover,
    &.Mui-selected,
    &.Mui-selected:hover {
      background-color: ${({ theme }) => rgba(theme.colors.shadow.color, 0.08)};
    }
  }
`;

const StyledTableCellCollapsible = styled(TableCell)`
  && {
    padding: 0;

    &.MuiTableCell-root {
      border-bottom: none;
    }
  }
`;

const StyledCollapse = styled(Collapse)`
  padding: 0 16px;
  border-bottom: 2px solid ${({ theme }) => theme.colors.separator};
`;

const StyledTextCap = styled(Text)`
  text-align: inherit;
  text-transform: uppercase;
`;

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
) => {
  if (!isCollapsible) {
    return cells;
  }

  return [
    ...cells,
    {
      alignment: TableAlignment.right,
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
  className,
  selectedRowIds = new Set(),
  sortedByHeaderId,
  sortDirection,
  onRowClick = () => undefined,
  onHeaderClick = () => undefined,
}: Props): React.ReactElement => (
  <StyledTableContainer>
    <StyledTableMui className={className}>
      {/* HEADER CELLS */}
      {headers && (
        <StyledTableHead>
          <StyledTableRow>
            {getHeaders(headers || [], isCollapsible).map((header) => (
              <TableCell
                key={header.id}
                align={header.alignment || TableAlignment.left}>
                <TableSortLabel
                  active={sortedByHeaderId === header.id}
                  direction={sortDirection}
                  onClick={() => onHeaderClick(header.id)}>
                  <StyledTextCap size="sm" strong>
                    {header.label}
                  </StyledTextCap>
                </TableSortLabel>
              </TableCell>
            ))}
          </StyledTableRow>
        </StyledTableHead>
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
              <StyledTableRow
                hover
                key={row.id}
                selected={selectedRowIds.has(row.id)}
                onClick={() => onRowClick(row.id)}>
                {rowCells.map((c, index) => {
                  return (
                    <TableCell
                      key={c.id || index}
                      align={c.alignment || TableAlignment.left}>
                      {c.content}
                    </TableCell>
                  );
                })}
              </StyledTableRow>

              {/* Collapsible content */}
              {isCollapsible && (
                <TableRow>
                  <StyledTableCellCollapsible colSpan={rowCells.length}>
                    {selectedRowIds.has(row.id) && (
                      <StyledCollapse
                        in={selectedRowIds.has(row.id)}
                        timeout="auto"
                        unmountOnExit>
                        <Box margin={1}>{row.collapsibleContent}</Box>
                      </StyledCollapse>
                    )}
                  </StyledTableCellCollapsible>
                </TableRow>
              )}
            </React.Fragment>
          );
        })}
      </TableBody>
    </StyledTableMui>
  </StyledTableContainer>
);
