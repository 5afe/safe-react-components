import React, { useState } from 'react';
import styled from 'styled-components';

//import theme from '../../../theme';
import { GenericModal, Icon, Button, Switch } from '../../../index';

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
  justify-content: space-around;
  align-items: center;
  border-bottom: 2px solid ${({ theme }) => theme.colors.separator};
`;

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
`;

const StyledItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 24px;
  height: 51px;
  border-bottom: 2px solid ${({ theme }) => theme.colors.separator};
`;

const StyledImage = styled.img`
  width: 26px;
  height: 26px;
  object-fit: contain;
`;

const StyledImageName = styled.div`
  display: flex;
  align-items: center;
`;

type Props = {
  title?: string;
  defaultIconUrl: string;
  itemList: Array<{
    id: number | string;
    iconUrl: string;
    name: string;
    description?: string;
    checked: boolean;
  }>;
  onItemToggle: (itemId: number | string, checked: boolean) => any;
  onClose: () => any;
};

const ManageList = ({
  title = 'Manage List',
  itemList,
  defaultIconUrl,
  onClose,
  onItemToggle
}: Props) => {
  const [search, setSearch] = useState('');

  const setDefaultImage = (e: any) => {
    e.target.onerror = null;
    e.target.src = defaultIconUrl;
  };

  const body = (
    <>
      <BodyHeader>
        <SearchContainer>
          <Icon size="md" type="search" />
          <SearchInput
            onChange={event => setSearch(event.target.value)}
            placeholder="Search by name or symbol"
            value={search}
          />
        </SearchContainer>

        <Button size="md" color="primary" variant="contained">
          + Add custom app
        </Button>
      </BodyHeader>
      <div>
        {itemList.map(i => {
          const onChange = (checked: boolean) => onItemToggle(i.id, checked);

          return (
            <StyledItem key={i.id}>
              <StyledImageName>
                <StyledImage
                  alt={i.name}
                  onError={setDefaultImage}
                  src={i.iconUrl}
                />
                <div>
                  <div>{i.name}</div>
                  <div>{i.description && i.description}</div>
                </div>
              </StyledImageName>
              <Switch checked={i.checked} onChange={onChange} />
            </StyledItem>
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
