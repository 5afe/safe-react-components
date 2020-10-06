import React from 'react';
import styled from 'styled-components';

import {
  Text,
  Identicon,
  EllipsisMenu,
  EllipsisMenuItem,
  ScanBlockButton,
  CopyToClipboardBtn,
} from '../../';
import { textShortener } from '../../utils/strings';
import { ThemeTextSize, ThemeColors, ThemeIdenticonSize } from '../../theme';
import { ExplorerUrl } from '../../typings/misc';

const StyledContainer = styled.div`
  display: flex;
  align-items: center;
`;

const IdenticonContainer = styled.div`
  display: flex;
  margin-right: 8px;
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
    margin-left: 8px;
  }
`;

type Props = {
  hash: string;
  textColor?: ThemeColors;
  textSize?: ThemeTextSize;
  identiconSize?: ThemeIdenticonSize;
  shortenHash?: number;
  className?: string;
  name?: string;
  showIdenticon?: boolean;
  showCopyBtn?: boolean;
  menuItems?: EllipsisMenuItem[];
  explorerUrl?: ExplorerUrl;
  showScanBlocksButton?: boolean;
};

const EthHashInfo = ({
  hash,
  name,
  textColor = 'text',
  textSize = 'lg',
  identiconSize = 'md',
  className,
  shortenHash,
  showIdenticon,
  showCopyBtn,
  menuItems,
  showScanBlocksButton,
  explorerUrl,
}: Props): React.ReactElement => (
  <StyledContainer className={className}>
    {showIdenticon && (
      <IdenticonContainer>
        <Identicon address={hash} size={identiconSize} />
      </IdenticonContainer>
    )}

    <InfoContainer>
      {name && (
        <Text size={textSize} color={textColor}>
          {name}
        </Text>
      )}
      <AddressContainer>
        <Text size={textSize} color={textColor}>
          {shortenHash
            ? textShortener(hash, shortenHash + 2, shortenHash)
            : hash}
        </Text>
        {showCopyBtn && <CopyToClipboardBtn textToCopy={hash} />}
        {showScanBlocksButton && explorerUrl && (
          <ScanBlockButton explorerUrl={explorerUrl} />
        )}
        {menuItems && <EllipsisMenu menuItems={menuItems} />}
      </AddressContainer>
    </InfoContainer>
  </StyledContainer>
);

export default EthHashInfo;
