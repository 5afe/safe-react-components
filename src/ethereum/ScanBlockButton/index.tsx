import React from 'react';
import styled from 'styled-components';

import { Icon } from '../..';
import { ExplorerInfo } from '../../typings/misc';

const StyledLink = styled.a`
  display: inline-flex;
  outline-color: ${({ theme }) => theme.colors.separator};
`;

type Props = {
  className?: string;
  explorerUrl: ExplorerInfo;
};

const ScanBlockButton = ({
  className,
  explorerUrl,
}: Props): React.ReactElement => {
  const { url, alt } = explorerUrl();
  const onClick = (event: React.MouseEvent<HTMLAnchorElement>): void => {
    event.stopPropagation();
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
      href={url}
      target="_blank"
      onKeyDown={onKeyDown}>
      <Icon size="sm" color="icon" type="externalLink" tooltip={alt} />
    </StyledLink>
  );
};

export default ScanBlockButton;
