import React, { useState } from 'react';
import styled from 'styled-components';

import { Icon } from '../..';
import copyTextToClipboard from './copyTextToClipboard';

const StyledButton = styled.button`
  background: none;
  color: inherit;
  border: none;
  padding: 0;
  font: inherit;
  cursor: pointer;
  outline: inherit;
`;

type Props = {
  textToCopy: string;
  className?: string;
};

const CopyToClipboard = ({
  className,
  textToCopy,
}: Props): React.ReactElement => {
  const [clicked, setClicked] = useState<boolean>(false);

  const onButtonClick = (): void => {
    copyTextToClipboard(textToCopy);
    setClicked(true);
  };

  const onButtonBlur = (): number =>
    setTimeout((): void => setClicked(false), 300);

  return (
    <StyledButton
      className={className}
      onClick={onButtonClick}
      onMouseLeave={onButtonBlur}>
      <Icon
        size="sm"
        color="icon"
        type="copy"
        tooltip={clicked ? 'Copied' : 'Copy to clipboard'}
      />
    </StyledButton>
  );
};

export default CopyToClipboard;
