import React, { useState } from 'react';

import TextField from './index';

export default {
  title: 'Inputs/TextField',
  component: TextField,
  parameters: {
    componentSubtitle: 'Input used to toggle a value'
  }
};

// const onSubmit = (e: React.FormEvent) => e.preventDefault();
// <StyledForm noValidate autoComplete="off" onSubmit={onSubmit}>
// </StyledForm>

export const textField = () => {
  const [value, setValue] = useState<string>('');
  return (
    <form noValidate autoComplete="off">
      <TextField
        id="standard-name"
        label="Name"
        value={value}
        onChange={e => setValue(e.target.value)}
      />
    </form>
  );
};


export const readOnly = () => {
    const [value, setValue] = useState<string>('');
    return (
      <form noValidate autoComplete="off">
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