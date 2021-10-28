import React, { useState } from 'react';
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
  gap: 4px;
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
  customAvatarFallback?: string;
  avatarSize?: ThemeIdenticonSize;
  showCopyBtn?: boolean;
  menuItems?: EllipsisMenuItem[];
  explorerUrl?: ExplorerInfo;
};

type ShortNameProps =
  | {
      shouldShowShortName: boolean;
      shouldCopyShortName?: boolean;
      shortName: string;
    }
  | {
      shouldShowShortName?: boolean;
      shouldCopyShortName: boolean;
      shortName: string;
    }
  | {
      shouldShowShortName?: never;
      shouldCopyShortName?: never;
      shortName?: string;
    };

type EthHashInfoProps = Props & ShortNameProps;

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
  customAvatarFallback,
  avatarSize = 'md',
  showCopyBtn,
  menuItems,
  explorerUrl,
  shortName,
  shouldShowShortName,
  shouldCopyShortName,
}: EthHashInfoProps): React.ReactElement => {
  const [fallbackToIdenticon, setFallbackToIdenticon] = useState(false);
  const [fallbackSrc, setFallabckSrc] = useState<undefined | string>(undefined);

  const setAppImageFallback = (): void => {
    if (customAvatarFallback && !fallbackToIdenticon) {
      setFallabckSrc(customAvatarFallback);
    } else {
      setFallbackToIdenticon(true);
    }
  };

  return (
    <StyledContainer className={className}>
      {showAvatar && (
        <AvatarContainer>
          {!fallbackToIdenticon && customAvatar ? (
            <StyledImg
              src={fallbackSrc || customAvatar}
              size={avatarSize}
              onError={setAppImageFallback}
            />
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
              {shouldShowShortName && (
                <Text size={textSize} as="span" strong>
                  {shortName}:
                </Text>
              )}
              {shortenHash
                ? textShortener(hash, shortenHash + 2, shortenHash)
                : hash}
            </Text>
          )}
          {showCopyBtn && (
            <CopyToClipboardBtn
              textToCopy={shouldCopyShortName ? `${shortName}:${hash}` : hash}
            />
          )}
          {explorerUrl && <ExplorerButton explorerUrl={explorerUrl} />}
          {menuItems && <EllipsisMenu menuItems={menuItems} />}
        </AddressContainer>
      </InfoContainer>
    </StyledContainer>
  );
};

export default EthHashInfo;
