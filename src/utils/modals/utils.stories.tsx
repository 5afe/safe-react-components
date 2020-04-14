import React from 'react';

import { ModalFooterConfirmation } from './utils';

export default {
  title: 'Utils/Modals/utils/FooterConfirmation',
  component: ModalFooterConfirmation,
  parameters: {
    componentSubtitle: 'A generic confirmation footer for modals'
  }
};

export const modalFooter = () => {
  return (
    <ModalFooterConfirmation
      okText="ok button text"
      cancelText="cancel button text"
      handleCancel={() => {}}
      handleOk={() => {}}
    />
  );
};

export const okDisabled = () => {
  return (
    <ModalFooterConfirmation
      okText="ok button text"
      cancelText="cancel button text"
      okDisabled
      handleCancel={() => {}}
      handleOk={() => {}}
    />
  );
};
