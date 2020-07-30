import React from 'react';
import styled from 'styled-components';

import EtherscanButton from './index';
import { Text } from '../..';

export default {
  title: 'Ethereum/Etherscan Button',
  component: EtherscanButton,
  parameters: {},
};

const StyledText = styled(Text)`
  margin-right: 5px;
`;

export const SimpleEtherscanButton = (): React.ReactElement => (
  <>
    <StyledText size="md">An Address example</StyledText>
    <br />
    <EtherscanButton
      type="address"
      value="0xda6786379ff88729264d31d472fa917f5e561443"
    />
    <br />
    <StyledText size="md">A Transaction example</StyledText>
    <br />
    <EtherscanButton
      type="tx"
      value="0xc276be3ffccc2398d3b82a0e375a94f67b8ad81c68f8625a5d516567dfe3de29"
    />
  </>
);
