import React, { useState } from 'react';

import Table, { Alignment, SortDirection } from './index';
import { Icon } from '../../';

export default {
  title: 'Data Display/Table',
  component: Table,
  parameters: {
    componentSubtitle:
      'Used for tabular information. It allows sorting by a single column.'
  }
};

const headerCells = [
  {
    id: 'col1',
    label: 'col1'
  },
  {
    id: 'col2',
    alignment: Alignment.right,
    label: 'col2'
  },
  {
    id: 'col3',
    alignment: Alignment.right,
    label: 'col3'
  }
];

const rows = [
  {
    id: '1',
    collapsibleContent: <div>content 1</div>,
    cells: [
      {
        content: <Icon type="addressBook" size="sm" />
      },
      {
        content: 1,
        alignment: Alignment.right
      },
      {
        content: 'safe',
        alignment: Alignment.right
      }
    ]
  },
  {
    id: '2',
    collapsibleContent: <div>content 2</div>,
    cells: [
      {
        content: <Icon type="apps" size="sm" />
      },
      {
        content: 2,
        alignment: Alignment.right
      },
      {
        content: 'gnosis',
        alignment: Alignment.right
      }
    ]
  }
];

export const table = () => <Table headers={headerCells} rows={rows} />;

export const sortable = () => {
  const [sortedByHeaderId, setSortedByHeaderId] = useState<string | undefined>(
    'col2'
  );
  const [sortDirection, setSortDirection] = useState<SortDirection>(
    SortDirection.asc
  );

  const onHeaderClick = (headerId: string) => {
    if (!['col2'].includes(headerId)) {
      return;
    }

    let newDirection =
      sortedByHeaderId === headerId && sortDirection === SortDirection.asc
        ? SortDirection.desc
        : SortDirection.asc;

    setSortDirection(newDirection);
    setSortedByHeaderId(headerId);
  };

  const getSortedRows = () => {
    const cp = [...rows];
    return cp.sort((a, b) => {
      return sortDirection === SortDirection.asc
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

export const collapsible = () => {
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
