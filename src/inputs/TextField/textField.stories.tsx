import React, { useState } from 'react';

import TextField from './index';

export default {
  title: 'Inputs/TextField',
  component: TextField,
  parameters: {
    componentSubtitle: 'Input used to toggle a value'
  }
};

const onSubmit = (e: React.FormEvent) => e.preventDefault();

export const textField = () => {
  const [value, setValue] = useState<string>('');
  return (
    <form noValidate autoComplete="off" onSubmit={onSubmit}>
      <TextField
        id="standard-name"
        label="Name"
        value={value}
        onChange={e => setValue(e.target.value)}
      />
    </form>
  );
};

export const error = () => {
  const [value, setValue] = useState<string>('some incorrect value');
  return (
    <form noValidate autoComplete="off" onSubmit={onSubmit}>
      <TextField
        id="standard-name"
        label="Name"
        value={value}
        meta={{ error: 'Some error' }}
        onChange={e => setValue(e.target.value)}
      />
    </form>
  );
};

export const readOnly = () => {
  const [value, setValue] = useState<string>('some value readOnly');
  return (
    <form noValidate autoComplete="off" onSubmit={onSubmit}>
      <TextField
        id="standard-name"
        label="Name"
        readOnly
        value={value}
        onChange={e => setValue(e.target.value)}
      />
    </form>
  );
};
