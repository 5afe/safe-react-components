import React from 'react';
import styled from 'styled-components';
import { rgba } from 'polished';

const StyledCard = styled.div`
  box-shadow: 1px 2px 10px 0
    ${({ theme }) => rgba(theme.colors.shadow.color, 0.08)};
  border-radius: 8px;
  padding: 24px;
  background-color: ${({ theme }) => theme.colors.white};
`;

type Props = {
  className?: string;
  children: React.ReactNode;
};

const Card = ({ className, children }: Props): React.ReactElement => (
  <StyledCard className={className}>{children}</StyledCard>
);

export default Card;
