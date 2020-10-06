import React from 'react';
import styled from 'styled-components';

import ScanBlockButton from './index';
import { Text } from '../..';

export default {
  title: 'Ethereum/ScanBlock Button',
  component: ScanBlockButton,
  parameters: {},
};

const StyledText = styled(Text)`
  margin-right: 5px;
`;

const hash = '0xda6786379ff88729264d31d472fa917f5e561443';
const hash2 = '0x72d9E579f691D62aA7e0703840db6dd2fa9fAE21';

const explorerUrl1 = () => ({
  alt: `Show details on Etherscan`,
  url: `https://etherscan.io/address/${hash}`,
});

const explorerUrl2 = () => ({
  alt: `Show details on BlockScout`,
  url: `https://blockscout.com/poa/xdai/address/${hash2}`,
});

export const SimpleScanBlockButton = (): React.ReactElement => (
  <>
    <StyledText size="md">An Address example</StyledText>
    <br />
    <ScanBlockButton explorerUrl={explorerUrl1} />
    <br />
    <StyledText size="md">A Transaction example</StyledText>
    <br />
    <ScanBlockButton explorerUrl={explorerUrl2} />
  </>
);
