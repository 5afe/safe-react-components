import React from 'react';
import styled from 'styled-components';

import { Icon } from '../..';

type Props = {
  className?: string;
  network?: 'mainnet' | 'rinkeby';
  type: 'address' | 'tx';
  value: string;
};

const StyledButton = styled.button`
  background: none;
  color: inherit;
  border: none;
  padding: 0;
  font: inherit;
  cursor: pointer;
  outline: inherit;
`;

const EtherscanButton = ({
  className,
  type,
  value,
  network = 'mainnet',
}: Props): React.ReactElement => {
  const getNetwork = () => {
    const lowerCaseNetwork = network.toLowerCase();
    return lowerCaseNetwork === 'mainnet' ? '' : `${lowerCaseNetwork}.`;
  };

  const goToEtherscan = () =>
    window.open(
      `https://${getNetwork()}etherscan.io/${type}/${value}`,
      '_blank'
    );

  return (
    <StyledButton className={className} onClick={goToEtherscan}>
      <Icon
        size="sm"
        color="icon"
        type="externalLink"
        tooltip="Show details on Etherscan"
      />
    </StyledButton>
  );
};

export default EtherscanButton;
