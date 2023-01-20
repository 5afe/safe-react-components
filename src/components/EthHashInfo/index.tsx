import React from 'react';
import { Box, Typography } from '@mui/material';

import { shortenAddress } from './utils';

import type { ReactElement } from 'react';

type EthHashInfoProps = {
  prefix?: string;
  address: string;
  icon?: ReactElement;
  copyButton?: ReactElement;
};

export const EthHashInfo = ({
  prefix,
  address,
  icon,
  copyButton,
}: EthHashInfoProps): ReactElement => {
  return (
    <Box display="flex" alignItems="center" gap=".5em" lineHeight="1.4">
      {icon && <Box flexShrink={0}>{icon}</Box>}
      <Box
        display="flex"
        alignItems="center"
        gap="0.25em"
        whiteSpace="nowrap"
        overflow="hidden">
        <Typography fontWeight="inherit" fontSize="inherit">
          {prefix && <b>{prefix}:</b>}
          {shortenAddress(address)}
        </Typography>
        {copyButton}
      </Box>
    </Box>
  );
};

export default EthHashInfo;
