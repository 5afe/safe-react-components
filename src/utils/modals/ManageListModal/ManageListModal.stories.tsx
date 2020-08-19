import React, { useState } from 'react';

import { Button, ManageListModal } from '../../../index';
import appIcon from './appsIcon.svg';

export default {
  title: 'Utils/Modals/ManageList',
  component: ManageListModal,
  parameters: {
    componentSubtitle:
      'A Modal to Manage a list by enabling/disabled list items',
  },
};

export const SimpleModal = (): React.ReactElement => {
  const [isOpen, setIsOpen] = useState(false);
  const [items, setItems] = useState([
    {
      id: '1',
      iconUrl: 'someUrl',
      name: 'one',
      description: 'Lorem Ipsum has been the industry',
      checked: true,
      isDeletable: true,
    },
    {
      id: '2',
      iconUrl: 'someUrl2',
      name: 'two',
      description: 'unknown printer took a galley of type',
      checked: true,
      isDeletable: true,
    },
    {
      id: '3',
      iconUrl: 'someUrl3',
      name: 'three',
      description:
        'Long desc ever since the 1500s do not finish over the ocean of this',
      checked: true,
    },
  ]);

  const onItemToggle = (itemId: string | number, checked: boolean) => {
    const copy = [...items];
    const localItem = copy.find((i) => i.id === itemId);
    if (!localItem) {
      return;
    }
    localItem.checked = checked;
    setItems(copy);
  };

  return (
    <>
      <Button size="md" color="primary" onClick={() => setIsOpen(!isOpen)}>
        Toggle modal
      </Button>
      {isOpen && (
        <ManageListModal
          defaultIconUrl={appIcon}
          itemList={items}
          showDeleteButton
          addButtonLabel="Add custom app"
          formBody={<div>some form</div>}
          onSubmitForm={() => undefined}
          onClose={() => setIsOpen(false)}
          onItemToggle={onItemToggle}
          onItemDeleted={() => alert('asd')}
        />
      )}
    </>
  );
};
