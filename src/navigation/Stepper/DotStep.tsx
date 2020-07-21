import React from 'react';
import styled from 'styled-components';

import { Icon } from '../../index';

const Circle = styled.div<{ disabled: boolean; error?: boolean }>`
  background-color: ${({ disabled, error, theme }) => {
    if (error) {
      return theme.colors.error;
    }
    if (disabled) {
      return theme.colors.secondaryLight;
    }

    return theme.colors.primary;
  }};
  color: ${({ theme }) => theme.colors.background};
  width: 24px;
  height: 24px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    margin-top: 4px;
  }
`;

type Props = {
  dotIndex: number;
  currentIndex: number;
  error?: boolean;
};
const DotStep = ({
  currentIndex,
  dotIndex,
  error,
}: Props): React.ReactElement => {
  return (
    <Circle disabled={dotIndex > currentIndex} error={error}>
      {dotIndex < currentIndex ? (
        <Icon size="sm" type="check" color="white" />
      ) : (
        dotIndex + 1
      )}
    </Circle>
  );
};

export default DotStep;
