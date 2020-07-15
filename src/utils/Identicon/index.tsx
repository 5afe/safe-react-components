import * as React from 'react';

import makeBlockie from 'ethereum-blockies-base64';
import styled from 'styled-components';
import { Theme } from '../../theme';

type IdenticonSize = keyof Theme['identicon']['size'];

type Props = {
  address: string;
  size: IdenticonSize;
};

const StyledImg = styled.img<{ size: IdenticonSize }>`
  height: ${({ size, theme }) => theme.identicon.size[size]};
  width: ${({ size, theme }) => theme.identicon.size[size]};
  border-radius: 50%;
`;

const Identicon = ({ size = 'md', address, ...rest }: Props) => {
  const iconSrc = React.useMemo(() => makeBlockie(address), [address]);

  return <StyledImg src={iconSrc} size={size} {...rest} />;
};

export default Identicon;
