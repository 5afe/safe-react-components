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
  outline-color: ${({ theme }) => theme.colors.separator};
  display: flex;
`;

type Props = {
  textToCopy: string;
  className?: string;
};

const CopyToClipboardBtn = ({
  className,
  textToCopy,
}: Props): React.ReactElement => {
  const [clicked, setClicked] = useState<boolean>(false);

  const onButtonClick = (
    event:
      | React.MouseEvent<HTMLButtonElement>
      | React.KeyboardEvent<HTMLButtonElement>
  ): void => {
    event.stopPropagation();
    copyTextToClipboard(textToCopy);
    setClicked(true);
  };

  const onKeyDown = (event: React.KeyboardEvent<HTMLButtonElement>): void => {
    // prevents event from bubbling when `Enter` is pressed
    if (event.keyCode === 13) {
      event.stopPropagation();
    }
  };

  const onButtonBlur = (): number =>
    setTimeout((): void => setClicked(false), 300);

  return (
    <StyledButton
      className={className}
      onClick={onButtonClick}
      onKeyPress={onKeyDown}
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

export default CopyToClipboardBtn;
