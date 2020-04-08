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
  handleOk: () => void;
  handleCancel: () => void;
};

export const ModalFooterConfirmation = ({
  cancelText = 'Cancel',
  handleCancel,
  handleOk,
  okText = 'Confirm'
}: Props) => {
  return (
    <FooterWrapper>
      <Button
        size="lg"
        color="secondary"
        variant="outlined"
        onClick={handleCancel}>
        {cancelText}
      </Button>
      <Button color="primary" size="lg" variant="contained" onClick={handleOk}>
        {okText}
      </Button>
    </FooterWrapper>
  );
};
