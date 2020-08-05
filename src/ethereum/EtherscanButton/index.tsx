import React from 'react';
import styled from 'styled-components';

import { Icon } from '../..';
import { Network } from '../../typings/misc';

const StyledLink = styled.a`
  display: inline-flex;
  outline-color: ${({ theme }) => theme.colors.separator};
`;

type Props = {
  className?: string;
  network?: Network;
  value: string;
};

const getNetwork = (network: Network) => {
  const lowerCaseNetwork = network.toLowerCase();
  return lowerCaseNetwork === 'mainnet' ? '' : `${lowerCaseNetwork}.`;
};

const EtherscanButton = ({
  className,
  value,
  network = 'mainnet',
}: Props): React.ReactElement => {
  const type = value.length > 42 ? 'tx' : 'address';

  const onClick = (event: React.MouseEvent<HTMLAnchorElement>): void => {
    event?.stopPropagation();
  };

  const onKeyDown = (event: React.KeyboardEvent<HTMLAnchorElement>): void => {
    // prevents event from bubbling when `Enter` is pressed
    if (event.keyCode === 13) {
      event.stopPropagation();
    }
  };

  return (
    <StyledLink
      className={className}
      aria-label="Show details on Etherscan"
      rel="noopener noreferrer"
      onClick={onClick}
      href={`https://${getNetwork(network)}etherscan.io/${type}/${value}`}
      target="_blank"
      onKeyDown={onKeyDown}>
      <Icon
        size="sm"
        color="icon"
        type="externalLink"
        tooltip="Show details on Etherscan"
      />
    </StyledLink>
  );
};

export default EtherscanButton;
