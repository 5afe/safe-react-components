import React from 'react';
import styled from 'styled-components';

import {
  Text,
  Identicon,
  EllipsisMenu,
  EllipsisMenuItem,
  EtherscanButton,
  CopyToClipboardBtn,
} from '../../';
import { textShortener } from '../../utils/strings';

const StyledContainer = styled.div`
  display: flex;
`;

const IdenticonContainer = styled.div`
  margin: 4px 8px 0 0;
`;

const InfoContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
`;

const AddressContainer = styled.div`
  display: flex;
  align-items: center;

  *:not(:first-child) {
    margin-left: 12px;
  }
`;

type Props = {
  address: string;
  shortenAddress?: number;
  className?: string;
  name?: string;
  showIdenticon?: boolean;
  showCopyBtn?: boolean;
  menuItems?: EllipsisMenuItem[];
  showEtherscanBtn?: boolean;
};

const AddressInfo = ({
  address,
  name,
  className,
  shortenAddress,
  showIdenticon,
  showCopyBtn,
  menuItems,
  showEtherscanBtn,
}: Props): React.ReactElement => (
  <StyledContainer className={className}>
    {showIdenticon && (
      <IdenticonContainer>
        <Identicon address="thisIsAnExample" size="md" />
      </IdenticonContainer>
    )}

    <InfoContainer>
      {name && (
        <Text size="lg" color="text">
          {name}
        </Text>
      )}
      <AddressContainer>
        <Text size="lg" color="text">
          {shortenAddress
            ? textShortener(address, shortenAddress + 2, shortenAddress)
            : address}
        </Text>
        {showCopyBtn && <CopyToClipboardBtn textToCopy={address} />}
        {showEtherscanBtn && <EtherscanButton type="address" value={address} />}
        {menuItems && <EllipsisMenu menuItems={menuItems} />}
      </AddressContainer>
    </InfoContainer>
  </StyledContainer>
);

export default AddressInfo;
