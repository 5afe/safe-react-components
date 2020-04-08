import React, { useState } from 'react';

import ManageList from './index';
import { Button } from '../../../index';

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
  const items = [
    { id: '1', icon: 'someUrl', name: 'name 1', enabled: true },
    { id: '2', icon: 'someUrl2', name: 'name 2', enabled: true },
    { id: '3', icon: 'someUrl3', name: 'name 3', enabled: true }
  ];
  return (
    <>
      <Button size="md" color="primary" onClick={() => setIsOpen(!isOpen)}>
        Toggle modal
      </Button>
      {isOpen && (
        <ManageList onClose={() => setIsOpen(false)} itemList={items} />
      )}
    </>
  );
};
