import React from 'react';

import { Icon } from '../..';

type Network = 'mainnet' | 'rinkeby';

type Props = {
  className?: string;
  network?: Network;
  type: 'address' | 'tx';
  value: string;
};

const getNetwork = (network: Network) => {
  const lowerCaseNetwork = network.toLowerCase();
  return lowerCaseNetwork === 'mainnet' ? '' : `${lowerCaseNetwork}.`;
};

const EtherscanButton = ({
  className,
  type,
  value,
  network = 'mainnet',
}: Props): React.ReactElement => {
  const etherscanLink = `https://${getNetwork(
    network
  )}etherscan.io/${type}/${value}`;

  return (
    <a
      className={className}
      aria-label="Show details on Etherscan"
      href={etherscanLink}
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
