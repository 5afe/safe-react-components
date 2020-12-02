import React from 'react';
import styled from 'styled-components';
import { rgba } from 'polished';

const StyledCard = styled.div`
  box-shadow: 1px 2px 10px 0
    ${({ theme }) => rgba(theme.colors.shadow.color, 0.18)};
  border-radius: 8px;
  padding: 24px;
  background-color: ${({ theme }) => theme.colors.white};
  z-index: 1;
  position: relative;
`;

const Disabled = styled.div`
  opacity: 0.5;
  pointer-events: none;
  position: absolute;
  height: 100%;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.white};
  z-index: 999;
  top: 0;
  left: 0;
`;

type Props = {
  className?: string;
  disabled?: boolean;
} & React.HTMLAttributes<HTMLDivElement>;

const Card: React.FC<Props> = ({
  className,
  children,
  disabled,
  ...rest
}): React.ReactElement => (
  <StyledCard className={className} {...rest}>
    {disabled && <Disabled />}
    {children}
  </StyledCard>
);

export default Card;
