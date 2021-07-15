import React from 'react';
import styled from 'styled-components';

import { Button } from '../../index';

const FooterWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 84px;

  button:first-child {
    margin-right: 16px;
  }
`;

type Props = {
  okText?: string;
  cancelText?: string;
  okDisabled?: boolean;
  handleOk: () => void;
  handleCancel: () => void;
};

export const ModalFooterConfirmation = ({
  cancelText = 'Cancel',
  handleCancel,
  okDisabled,
  handleOk,
  okText = 'Confirm',
}: Props): React.ReactElement => {
  return (
    <FooterWrapper>
      <Button
        size="md"
        color="primary"
        variant="outlined"
        onClick={handleCancel}>
        {cancelText}
      </Button>
      <Button
        color="primary"
        size="md"
        variant="contained"
        onClick={handleOk}
        disabled={okDisabled}>
        {okText}
      </Button>
    </FooterWrapper>
  );
};
