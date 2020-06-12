import * as React from 'react';

import makeBlockie from 'ethereum-blockies-base64';
import styled from 'styled-components';
import { Theme } from '../../theme';

type Props = {
  address: string;
  size: keyof Theme['identicon']['size'];
};

const StyledImg = styled.img<{ size: string }>`
  height: ${({ size, theme }) => theme.identicon.size[size]};
  width: ${({ size, theme }) => theme.identicon.size[size]};
  border-radius: 50%;
`;

const Identicon = ({ size = 'md', address, ...rest }: Props) => {
  const iconSrc = React.useMemo(() => makeBlockie(address), [address]);

  return <StyledImg src={iconSrc} size={size} {...rest} />;
};

export default Identicon;
