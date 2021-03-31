import React from 'react';
import styled from 'styled-components';

import {
  Text,
  Identicon,
  EllipsisMenu,
  EllipsisMenuItem,
  ExplorerButton,
  CopyToClipboardBtn,
} from '../../';
import { textShortener } from '../../utils/strings';
import { ThemeTextSize, ThemeColors, ThemeIdenticonSize } from '../../theme';
import { ExplorerInfo } from '../../typings/misc';

const StyledContainer = styled.div`
  display: flex;
  align-items: center;
`;

const AvatarContainer = styled.div`
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

const StyledImg = styled.img<{ size: ThemeIdenticonSize }>`
  height: ${({ size, theme }) => theme.identicon.size[size]};
  width: ${({ size, theme }) => theme.identicon.size[size]};
  border-radius: 50%;
`;

type Props = {
  className?: string;
  hash: string;
  shortenHash?: number;
  name?: string;
  textColor?: ThemeColors;
  textSize?: ThemeTextSize;
  showAvatar?: boolean;
  customAvatar?: string;
  avatarSize?: ThemeIdenticonSize;
  showCopyBtn?: boolean;
  menuItems?: EllipsisMenuItem[];
  explorerUrl?: ExplorerInfo;
};

const EthHashInfo = ({
  hash,
  name,
  textColor = 'text',
  textSize = 'lg',
  className,
  shortenHash,
  showAvatar,
  customAvatar,
  avatarSize = 'md',
  showCopyBtn,
  menuItems,
  explorerUrl,
}: Props): React.ReactElement => (
  <StyledContainer className={className}>
    {showAvatar && (
      <AvatarContainer>
        {customAvatar ? (
          <StyledImg src={customAvatar} size={avatarSize} />
        ) : (
          <Identicon address={hash} size={avatarSize} />
        )}
      </AvatarContainer>
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
        {explorerUrl && <ExplorerButton explorerUrl={explorerUrl} />}
        {menuItems && <EllipsisMenu menuItems={menuItems} />}
      </AddressContainer>
    </InfoContainer>
  </StyledContainer>
);

export default EthHashInfo;
