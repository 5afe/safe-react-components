import React from 'react';
import styled from 'styled-components';
import { Title, Icon } from '../../index';

type Props = {
  className?: string;
  content?: 'text' | 'icon';
};

const DotText = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  height: 36px;
  width: 36px;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
`;

const DotIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  height: 36px;
  width: 36px;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
`;

const Dot = ({ className, content }: Props): React.ReactElement => {
  return content === 'text' ? (
    <DotText className={className}>
      <Title size="xs">1</Title>
    </DotText>
  ) : (
    <DotIcon className={className}>
      <Icon size="sm" type="check" color="white" />
    </DotIcon>
  );
};

export default Dot;
