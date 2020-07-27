import React from 'react';
import styled from 'styled-components';

const StyledDivider = styled.div`
  border-top: 2px solid ${({ theme }) => theme.colors.separator};
  margin: 16px 0;
`;

type Props = {
  className?: string;
};

const Divider = ({ className }: Props): React.ReactElement => (
  <StyledDivider className={className} />
);

export default Divider;
