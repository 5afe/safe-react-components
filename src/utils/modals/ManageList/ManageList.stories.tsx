import React, { useState } from 'react';

import ManageList from './index';
import { Button } from '../../../index';
import appIcon from './appsIcon.svg';

export default {
  title: 'Utils/Modals/ManageList',
  component: ManageList,
  parameters: {
    componentSubtitle:
      'A Modal to Manage a list by enabling/disabled list items'
  }
};

export const modal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [items, setItems] = useState([
    {
      id: '1',
      iconUrl: 'someUrl',
      name: 'name 1',
      description: 'description 1',
      checked: true
    },
    {
      id: '2',
      iconUrl: 'someUrl2',
      name: 'name 2',
      description: 'description 2',
      checked: true
    },
    {
      id: '3',
      iconUrl: 'someUrl3',
      name: 'name 3',
      description: 'description 3',
      checked: true
    }
  ]);

  const onItemToggle = (itemId: string, checked: boolean) => {
    const copy = [...items];
    const localItem = copy.find(i => i.id === itemId);
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
        <ManageList
          defaultIconUrl={appIcon}
          itemList={items}
          addButtonLabel="Add custom app"
          formBody={<div>some form</div>}
          onSubmitForm={() => {}}
          onClose={() => setIsOpen(false)}
          onItemToggle={onItemToggle}
        />
      )}
    </>
  );
};
