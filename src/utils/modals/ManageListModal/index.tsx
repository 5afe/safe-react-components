import React, { useState } from 'react';
import styled from 'styled-components';

import { GenericModal, Icon, Text, Button, Switch } from '../../../index';

const SearchInput = styled.input`
  border: none;
  background-color: transparent;
  box-shadow: none;
  font-family: ${({ theme }) => theme.fonts.fontFamily};

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
  height: 52px;
  border-right: 2px solid ${({ theme }) => theme.colors.separator};
  padding: 0 16px 0 0;
`;

const StyledItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 24px;
  height: 51px;
  border-bottom: 2px solid ${({ theme }) => theme.colors.separator};

  :last-child {
    border-bottom: 0px;
  }
`;

const StyledButton = styled(Button)`
  text-transform: capitalize;
`;

const StyledImage = styled.img`
  width: 26px;
  height: 26px;
  object-fit: contain;
  margin: 0 16px 0 0;
  border-radius: 16px;
  background-color: ${({ theme }) => theme.colors.icon};;
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
  addButtonLabel?: string;
  formBody: React.ReactNode;
  formSubmitLabel?: string;
  onSubmitForm: () => any;
  onItemToggle: (itemId: number | string, checked: boolean) => any;
  onClose: () => any;
};

const ManageList = ({
  title = 'Manage List',
  itemList,
  defaultIconUrl,
  formBody,
  addButtonLabel = 'add',
  onItemToggle,
  onClose
}: Props) => {
  const [search, setSearch] = useState('');
  const [isFormMode, setIsFormMode] = useState(false);

  const setDefaultImage = (e: any) => {
    e.target.onerror = null;
    e.target.src = defaultIconUrl;
  };

  const getBody = () => {
    return isFormMode ? (
      formBody
    ) : (
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

          <StyledButton
            size="md"
            color="primary"
            variant="contained"
            onClick={() => setIsFormMode(!isFormMode)}>
            <Text size="lg">+ {addButtonLabel}</Text>
          </StyledButton>
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
                    <div>
                      <Text size="lg" strong>
                        {i.name}
                      </Text>
                    </div>
                    <div>
                      <Text size="md">{i.description && i.description}</Text>
                    </div>
                  </div>
                </StyledImageName>
                <Switch checked={i.checked} onChange={onChange} />
              </StyledItem>
            );
          })}
        </div>
      </>
    );
  };

  return (
    <GenericModal
      onClose={onClose}
      title={title}
      body={getBody()}
      withoutBodyPadding
    />
  );
};

export default ManageList;
