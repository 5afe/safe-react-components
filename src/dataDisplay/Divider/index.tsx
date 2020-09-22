import React from 'react';
import styled from 'styled-components';

type Props = {
  className?: string;
  orientation?: 'vertical' | 'horizontal';
};

const HorizontalDivider = styled.div`
  border-top: 2px solid ${({ theme }) => theme.colors.separator};
  margin: 16px 0;
`;

const VerticalDivider = styled.div`
  border-right: 2px solid ${({ theme }) => theme.colors.separator};
  margin: 0 5px;
  height: 100%;
`;

const Divider = ({ className, orientation }: Props): React.ReactElement => {
  return orientation === 'vertical' ? (
    <VerticalDivider className={className} />
  ) : (
    <HorizontalDivider className={className} />
  );
};

export default Divider;
