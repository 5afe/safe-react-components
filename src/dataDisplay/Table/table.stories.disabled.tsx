import React, { useState } from 'react';

import { Table, TableAlignment, TableRow, TableSortDirection } from './index';
import { Icon } from '../../';

export default {
  title: 'Data Display/Table',
  component: Table,
  parameters: {
    componentSubtitle:
      'Used for tabular information. It allows sorting by a single column.',
  },
};

const headerCells = [
  {
    id: 'col1',
    label: 'col1',
    hideSortIcon: true,
  },
  {
    id: 'col2',
    alignment: TableAlignment.right,
    label: 'col2',
  },
  {
    id: 'col3',
    alignment: TableAlignment.right,
    label: 'col3',
    hideSortIcon: true,
  },
];

const rows = [
  {
    id: '1',
    collapsibleContent: <div>content 1</div>,
    cells: [
      {
        content: <Icon type="addressBook" size="sm" />,
      },
      {
        content: 1,
        alignment: TableAlignment.right,
      },
      {
        content: 'safe',
        alignment: TableAlignment.right,
      },
    ],
  },
  {
    id: '2',
    collapsibleContent: <div>content 2</div>,
    cells: [
      {
        content: <Icon type="apps" size="sm" />,
      },
      {
        content: 2,
        alignment: TableAlignment.right,
      },
      {
        content: 'gnosis',
        alignment: TableAlignment.right,
      },
    ],
  },
];

export const SimpleTable = (): React.ReactElement => (
  <Table headers={headerCells} rows={rows} />
);

export const WithoutHeader = (): React.ReactElement => <Table rows={rows} />;

export const Sortable = (): React.ReactElement => {
  const [sortedByHeaderId, setSortedByHeaderId] = useState<string | undefined>(
    'col2'
  );
  const [sortDirection, setSortDirection] = useState<TableSortDirection>(
    TableSortDirection.asc
  );

  const onHeaderClick = (headerId: string) => {
    if (!['col2'].includes(headerId)) {
      return;
    }

    const newDirection =
      sortedByHeaderId === headerId && sortDirection === TableSortDirection.asc
        ? TableSortDirection.desc
        : TableSortDirection.asc;

    setSortDirection(newDirection);
    setSortedByHeaderId(headerId);
  };

  const getSortedRows = () => {
    const cp = [...rows];
    return cp.sort((a, b) => {
      return sortDirection === TableSortDirection.asc
        ? Number(a.cells[1].content) - Number(b.cells[1].content)
        : Number(b.cells[1].content) - Number(a.cells[1].content);
    });
  };

  return (
    <Table
      headers={headerCells}
      rows={getSortedRows()}
      //selectedRowIds={selectedRowIds}
      sortedByHeaderId={sortedByHeaderId}
      sortDirection={sortDirection}
      onHeaderClick={onHeaderClick}
    />
  );
};

export const Collapsible = (): React.ReactElement => {
  const [selectedRowIds, setSelectedRowIds] = useState<Set<string>>(new Set());

  const onRowClick = (rowId: string) => {
    const cp = new Set(selectedRowIds);
    if (cp.has(rowId)) {
      cp.delete(rowId);
    } else {
      cp.add(rowId);
    }
    setSelectedRowIds(cp);
  };

  return (
    <Table
      headers={headerCells}
      isCollapsible
      rows={rows}
      selectedRowIds={selectedRowIds}
      onRowClick={onRowClick}
    />
  );
};

export const FixedHeader = (): React.ReactElement => {
  const manyRows: TableRow[] = Array.from(new Array<string>(100).keys()).map(
    (val, idx) => ({
      id: idx.toString(),
      collapsibleContent: <div>content {idx}</div>,
      cells: [
        {
          content: <Icon type="addressBook" size="sm" />,
        },
        {
          content: idx.toString(),
          alignment: TableAlignment.right,
        },
        {
          content: `Row #${idx}`,
          alignment: TableAlignment.right,
        },
      ],
    })
  );
  return (
    <Table
      isStickyHeader={true}
      maxHeight={300}
      headers={headerCells}
      rows={manyRows}
    />
  );
};
