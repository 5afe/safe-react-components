import React from 'react';
import styled from 'styled-components';

import { Button } from '../../index';

const FooterWrapper = styled.div`
  display: flex;
  justify-content: space-around;
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
}: Props) => {
  return (
    <FooterWrapper>
      <Button size="md" color="secondary" onClick={handleCancel}>
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
