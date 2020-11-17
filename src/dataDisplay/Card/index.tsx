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
} & React.HTMLAttributes<HTMLDivElement>;

const Card: React.FC<Props> = ({
  className,
  children,
  ...rest
}): React.ReactElement => (
  <StyledCard className={className} {...rest}>
    {children}
  </StyledCard>
);

export default Card;
