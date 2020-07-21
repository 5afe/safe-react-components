import React from 'react';

import { ModalFooterConfirmation } from './utils';

export default {
  title: 'Utils/Modals/utils/FooterConfirmation',
  component: ModalFooterConfirmation,
  parameters: {
    componentSubtitle: 'A generic confirmation footer for modals',
  },
};

export const ModalFooter = (): React.ReactElement => {
  return (
    <ModalFooterConfirmation
      okText="ok button text"
      cancelText="cancel button text"
      handleCancel={() => undefined}
      handleOk={() => undefined}
    />
  );
};

export const OkDisabled = (): React.ReactElement => {
  return (
    <ModalFooterConfirmation
      okText="ok button text"
      cancelText="cancel button text"
      okDisabled
      handleCancel={() => undefined}
      handleOk={() => undefined}
    />
  );
};
