import * as React from 'react';

import makeBlockie from 'ethereum-blockies-base64';
import styled from 'styled-components';
import { Theme } from '../../theme';

type Props = {
  address: string;
  className?: string;
  size: keyof Theme['identicon']['size'];
};

const StyledImg = styled.img<{ size: string }>`
  height: ${({ size, theme }) => theme.identicon.size[size]};
  width: ${({ size, theme }) => theme.identicon.size[size]};
  border-radius: 50%;
`;

const Identicon: React.FC<Props> = ({ size = 'md', address, className }) => {
  const iconSrc = React.useMemo(() => makeBlockie(address), [address]);

  return <StyledImg src={iconSrc} size={size} className={className} />;
};

export default Identicon;
