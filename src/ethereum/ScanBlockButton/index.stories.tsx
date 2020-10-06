import React from 'react';
import styled from 'styled-components';

import ScanBlockButton from './index';
import { Text } from '../..';

export default {
  title: 'Ethereum/Etherscan Button',
  component: ScanBlockButton,
  parameters: {},
};

const StyledText = styled(Text)`
  margin-right: 5px;
`;

const hash = '0xda6786379ff88729264d31d472fa917f5e561443';
const hash2 =
  '0xc276be3ffccc2398d3b82a0e375a94f67b8ad81c68f8625a5d516567dfe3de29';

const scanBlockUrl1 = () => ({
  alt: `Show details on Etherscan`,
  url: `https://etherscan.io/address/${hash}`,
});

const scanBlockUrl2 = () => ({
  alt: `Show details on Etherscan`,
  url: `https://etherscan.io/address/${hash2}`,
});

export const SimpleScanBlockButton = (): React.ReactElement => (
  <>
    <StyledText size="md">An Address example</StyledText>
    <br />
    <ScanBlockButton scanBlockUrl={scanBlockUrl1} />
    <br />
    <StyledText size="md">A Transaction example</StyledText>
    <br />
    <ScanBlockButton scanBlockUrl={scanBlockUrl2} />
  </>
);