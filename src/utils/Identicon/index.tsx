import * as React from 'react';

import makeBlockie from 'ethereum-blockies-base64';
import styled from 'styled-components';
import { ThemeIdenticonSize } from '../../theme';

type Props = {
  address: string;
  size: ThemeIdenticonSize;
};

const StyledImg = styled.img<{ size: ThemeIdenticonSize }>`
  height: ${({ size, theme }) => theme.identicon.size[size]};
  width: ${({ size, theme }) => theme.identicon.size[size]};
  border-radius: 50%;
`;

const Identicon = ({
  size = 'md',
  address,
  ...rest
}: Props): React.ReactElement => {
  const iconSrc = React.useMemo(() => makeBlockie(address), [address]);

  return <StyledImg src={iconSrc} size={size} {...rest} />;
};

export default Identicon;
