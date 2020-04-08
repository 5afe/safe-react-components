import React, { useState } from 'react';
import styled from 'styled-components';

//import theme from '../../../theme';
import { GenericModal, Icon, Button } from '../../../index';

const SearchInput = styled.input`
  border: none;
  background-color: transparent;
  box-shadow: none;

  :focus {
    outline: none;
  }
`;

const BodyHeader = styled.div`
  display: flex;
  justify-content2: center;
  align-items: center;
  border-bottom: 2px solid ${({ theme }) => theme.colors.separator};
`;

type Props = {
  title?: string;
  itemList: Array<{
    id: number | string;
    icon: string;
    name: string;
    enabled: boolean;
  }>;
  onClose: () => any;
};

const ManageList = ({ title = 'Manage List', onClose, itemList }: Props) => {
  const [search, setSearch] = useState('');
  const body = (
    <>
      <BodyHeader>
        <Icon size="md" type="search" />
        <SearchInput
          onChange={event => setSearch(event.target.value)}
          placeholder="Search by name or symbol"
          value={search}
        />
        <Button size="md" color="primary" variant="contained">
          + Add custom app
        </Button>
      </BodyHeader>
      <div>
        {itemList.map(i => {
          return (
            <div key={i.id}>
              {i.id}
              {i.icon}
              {i.name}
              {i.enabled}
            </div>
          );
        })}
      </div>
    </>
  );

  return (
    <GenericModal
      onClose={onClose}
      title={title}
      body={body}
      withoutBodyPadding
    />
  );
};

export default ManageList;
