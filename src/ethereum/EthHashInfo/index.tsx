import React, { SyntheticEvent } from 'react';
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

import asd from 'src/utils/modals/ManageListModal/appsIcon.svg';

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
`;

type Props = {
  className?: string;
  hash: string;
  showHash?: boolean;
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

export const setAppImageFallback = (
  error: SyntheticEvent<HTMLImageElement, Event>
): void => {
  error.currentTarget.onerror = null;
  error.currentTarget.src = asd;
};

const EthHashInfo = ({
  hash,
  showHash = true,
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
          <StyledImg src={customAvatar} size={avatarSize} onerror={onerror} />
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
        {showHash && (
          <Text size={textSize} color={textColor}>
            {shortenHash
              ? textShortener(hash, shortenHash + 2, shortenHash)
              : hash}
          </Text>
        )}
        {showCopyBtn && <CopyToClipboardBtn textToCopy={hash} />}
        {explorerUrl && <ExplorerButton explorerUrl={explorerUrl} />}
        {menuItems && <EllipsisMenu menuItems={menuItems} />}
      </AddressContainer>
    </InfoContainer>
  </StyledContainer>
);

export default EthHashInfo;
