import React, { useState } from 'react';
import { Box, styled, Typography, useTheme } from '@mui/material';
import { ethers } from 'ethers';

import { shortenAddress } from './utils';

import type { ReactElement } from 'react';
import Identicon from './Identicon';
import useMediaQuery from '@mui/material/useMediaQuery';
import CopyAddressButton from './CopyAddressButton';

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
          <Typography
            variant="body2"
            component="div"
            textOverflow="ellipsis"
            overflow="hidden"
            title={name}>
            {name}
          </Typography>
        )}

        <AddressContainer>
          <Typography fontWeight="inherit" fontSize="inherit">
            {showPrefix && shouldPrefix && prefix && <b>{prefix}:</b>}
            {isMobile ? (
              <span>{shortenAddress(address)}</span>
            ) : (
              <span>{shortAddress ? shortenAddress(address) : address}</span>
            )}
          </Typography>
          {showCopyButton && (
            <CopyAddressButton
              prefix={prefix}
              address={address}
              copyPrefix={shouldPrefix && copyPrefix}
            />
          )}

          {/* {hasExplorer && <ExplorerLink address={address} />} */}
          {children}
        </AddressContainer>
      </Box>
    </Container>
  );
};

const Container = styled('div')`
  display: flex;
  align-items: center;
  gap: 0.5em;
  line-height: 1.4;
`;

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
