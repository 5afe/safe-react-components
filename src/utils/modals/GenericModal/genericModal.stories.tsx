import React, { useState } from 'react';

import GenericModal from './index';
import { Button } from '../../../index';

export default {
  title: 'Utils/Modals/Generic',
  component: GenericModal,
  parameters: {
    componentSubtitle: 'A generic modal with custom Title, Body and Footer',
  },
};

export const SimpleModal = (): React.ReactElement => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <Button size="md" color="primary" onClick={() => setIsOpen(!isOpen)}>
        Toggle modal
      </Button>
      {isOpen && (
        <GenericModal
          onClose={() => setIsOpen(false)}
          title="This is the title"
          body={<div>This is the body</div>}
          footer={<div>This is the footer</div>}
        />
      )}
    </>
  );
};
