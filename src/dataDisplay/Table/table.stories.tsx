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

export const section = () => {
  const [selectedRowIds, setSelectedRowIds] = useState<Set<string>>(new Set());
  const [sortedByHeaderId, setSortedByHeaderId] = useState<string | undefined>(
    'col2'
  );
  const [sortDirection, setSortDirection] = useState<SortDirection>(
    SortDirection.asc
  );

  const onRowClick = (rowId: string) => {
    const cp = new Set(selectedRowIds);
    if (cp.has(rowId)) {
      cp.delete(rowId);
    } else {
      cp.add(rowId);
    }
    setSelectedRowIds(cp);
  };

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
      label: 'col3'
    }
  ];

  const rows = [
    {
      id: '1',
      cells: [
        {
          content: <Icon type="addressBook" size="sm" />
        },
        {
          content: 1,
          alignment: Alignment.right
        },
        {
          content: 'safe'
        }
      ]
    },
    {
      id: '2',
      cells: [
        {
          content: <Icon type="apps" size="sm" />
        },
        {
          content: 2,
          alignment: Alignment.right
        },
        {
          content: 'gnosis'
        }
      ]
    }
  ];

  return (
    <Table
      headers={headerCells}
      rows={getSortedRows()}
      selectedRowIds={selectedRowIds}
      sortedByHeaderId={sortedByHeaderId}
      sortDirection={sortDirection}
      onRowClick={onRowClick}
      onHeaderClick={onHeaderClick}
    />
  );
};
