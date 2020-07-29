import React from 'react';
import styled from 'styled-components';

import { Network } from '../../typings/misc';
import {
  Text,
  Identicon,
  EllipsisMenu,
  EllipsisMenuItem,
  EtherscanButton,
  CopyToClipboardBtn,
} from '../../';
import { textShortener } from '../../utils/strings';
import { ThemeTextSize, ThemeColors } from '../../theme';

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
  align-items: end;

  *:not(:first-child) {
    margin-left: 8px;
  }
`;

type Props = {
  address: string;
  textColor?: ThemeColors;
  textSize?: ThemeTextSize;
  shortenAddress?: number;
  className?: string;
  name?: string;
  showIdenticon?: boolean;
  showCopyBtn?: boolean;
  menuItems?: EllipsisMenuItem[];
  showEtherscanBtn?: boolean;
  network?: Network;
};

const AddressInfo = ({
  address,
  name,
  textColor = 'text',
  textSize = 'lg',
  className,
  shortenAddress,
  showIdenticon,
  showCopyBtn,
  menuItems,
  showEtherscanBtn,
  network,
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
        <Text size={textSize} color={textColor}>
          {shortenAddress
            ? textShortener(address, shortenAddress + 2, shortenAddress)
            : address}
        </Text>
        {showCopyBtn && <CopyToClipboardBtn textToCopy={address} />}
        {showEtherscanBtn && (
          <EtherscanButton type="address" value={address} network={network} />
        )}
        {menuItems && <EllipsisMenu menuItems={menuItems} />}
      </AddressContainer>
    </InfoContainer>
  </StyledContainer>
);

export default AddressInfo;
