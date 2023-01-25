import React, { useState, ReactElement } from 'react';
import { useTheme } from '@mui/material';
import styled from '@mui/system/styled';
import Box from '@mui/system/Box';
import useMediaQuery from '@mui/material/useMediaQuery';
import { ethers } from 'ethers';

import { shortenAddress } from './utils';

import Identicon from './Identicon';
import CopyAddressButton from './CopyAddressButton';
import ExplorerButton, { ExplorerButtonProps } from '../ExplorerButton';

type EthHashInfoProps = {
  address: string;
  chainId?: string;
  name?: string | null;
  showAvatar?: boolean;
  showCopyButton?: boolean;
  prefix?: string;
  showPrefix?: boolean;
  copyPrefix?: boolean;
  shortAddress?: boolean;
  customAvatar?: string;
  hasExplorer?: boolean;
  avatarSize?: number;
  children?: React.ReactNode;
  ExplorerButtonProps?: ExplorerButtonProps;
};

const EthHashInfo = ({
  address,
  customAvatar,
  prefix = '',
  copyPrefix,
  showPrefix,
  shortAddress = true,
  showAvatar = true,
  avatarSize,
  name,
  showCopyButton,
  hasExplorer,
  ExplorerButtonProps,
  children,
}: EthHashInfoProps): ReactElement => {
  const [fallbackToIdenticon, setFallbackToIdenticon] = useState(false);
  const shouldPrefix = ethers.utils.isAddress(address);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Container>
      {showAvatar && (
        <AvatarContainer size={avatarSize}>
          {!fallbackToIdenticon && customAvatar ? (
            <img
              src={customAvatar}
              alt={address}
              onError={() => setFallbackToIdenticon(true)}
              width={avatarSize}
              height={avatarSize}
            />
          ) : (
            <Identicon address={address} size={avatarSize} />
          )}
        </AvatarContainer>
      )}

      <Box overflow="hidden">
        {name && (
          <Box
            sx={{ typography: 'body2' }}
            textOverflow="ellipsis"
            overflow="hidden"
            title={name}>
            {name}
          </Box>
        )}

        <AddressContainer>
          <Box fontWeight="inherit" fontSize="inherit">
            {showPrefix && shouldPrefix && prefix && <b>{prefix}:</b>}
            {isMobile ? (
              <span>{shortenAddress(address)}</span>
            ) : (
              <span>{shortAddress ? shortenAddress(address) : address}</span>
            )}
          </Box>

          {showCopyButton && (
            <CopyAddressButton
              prefix={prefix}
              address={address}
              copyPrefix={shouldPrefix && copyPrefix}
            />
          )}

          {hasExplorer && ExplorerButtonProps && (
            <ExplorerButton {...ExplorerButtonProps} />
          )}

          {children}
        </AddressContainer>
      </Box>
    </Container>
  );
};

const Container = styled('div')({
  display: 'flex',
  alignItems: 'center',
  gap: '0.5em',
  lineHeight: 1.4,
});

const AvatarContainer = styled('div')<{ size?: number }>(({ size }) => ({
  flexShrink: 0,
  width: size || '2.3em !important',
  height: size || '2.3em !important',
}));

const AddressContainer = styled('div')({
  display: 'flex',
  alignItems: 'center',
  gap: '0.25em',
  whiteSpace: 'nowrap',
});

export default EthHashInfo;
