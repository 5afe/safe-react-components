import * as React from 'react';

import makeBlockie from 'ethereum-blockies-base64';
import styled from 'styled-components';
import { Theme } from '../../theme';

type Props = {
  address: string;
  className?: string;
  diameter: keyof Theme['identicon']['size'];
};

const StyledImg = styled.img<{ diameter: string }>`
  height: ${({ diameter }) => diameter}px;
  width: ${({ diameter }) => diameter}px;
  line-height: ${({ diameter, theme }) => theme.identicon.size[diameter]};
  border-radius: 50%;
`;

const Identicon: React.FC<Props> = ({ diameter = 'md', address, className }) => {
  const iconSrc = React.useMemo(() => makeBlockie(address), [address]);

  return <StyledImg src={iconSrc} diameter={diameter} className={className} />;
};

export default Identicon;
