import React from 'react';
import styled from 'styled-components';

import { Icon } from '../..';

type Props = {
  className?: string;
  network?: 'mainnet' | 'rinkeby';
  type: 'address' | 'tx';
  value: string;
};

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
    `https://${getNetwork()}etherscan.io/${type}/${value}`;

  return (
    <a
      className={className}
      aria-label="Show details on Etherscan"
      href={goToEtherscan()}
      rel="noopener noreferrer"
      target="_blank">
      <Icon
        size="sm"
        color="icon"
        type="externalLink"
        tooltip="Show details on Etherscan"
      />
    </a>
  );
};

export default EtherscanButton;
