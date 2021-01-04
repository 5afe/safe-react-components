import React, { useState } from 'react';

import TextField from './index';
import { Icon } from '../../dataDisplay';

export default {
  title: 'Inputs/TextField',
  component: TextField,
  parameters: {
    componentSubtitle: 'Text field input with several variants',
  },
};

const onSubmit = (e: React.FormEvent) => e.preventDefault();

export const SimpleTextField = (): React.ReactElement => {
  const [value, setValue] = useState<string>('');
  return (
    <form noValidate autoComplete="off" onSubmit={onSubmit}>
      <TextField
        id="standard-name"
        label="Name"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </form>
  );
};

export const SimpleNumberField = (): React.ReactElement => {
  const [value, setValue] = useState<string>('');
  return (
    <form noValidate autoComplete="off" onSubmit={onSubmit}>
      <TextField
        id="standard-name"
        label="Name"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        input={{ type: 'number', min: 5, max: 10, step: 1 }}
      />
    </form>
  );
};

export const Error = (): React.ReactElement => {
  const [value, setValue] = useState<string>('some incorrect value');
  return (
    <form noValidate autoComplete="off" onSubmit={onSubmit}>
      <TextField
        id="standard-name"
        label="Name"
        value={value}
        meta={{ error: 'Some error' }}
        onChange={(e) => setValue(e.target.value)}
      />
    </form>
  );
};

export const ReadOnly = (): React.ReactElement => {
  const [value, setValue] = useState<string>('some value readOnly');
  return (
    <form noValidate autoComplete="off" onSubmit={onSubmit}>
      <TextField
        id="standard-name"
        label="Name"
        readOnly
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </form>
  );
};

export const StartAdornment = (): React.ReactElement => {
  const [value, setValue] = useState('');
  const adornment = <Icon size="md" type="assets" />;
  return (
    <form noValidate autoComplete="off" onSubmit={onSubmit}>
      <TextField
        id="standard-name"
        label="Name"
        value={value}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setValue(e.target.value)
        }
        startAdornment={adornment}
      />
    </form>
  );
};

export const EndAdornment = (): React.ReactElement => {
  const [value, setValue] = useState('');
  const adornment = <Icon size="md" type="assets" />;
  return (
    <form noValidate autoComplete="off" onSubmit={onSubmit}>
      <TextField
        id="standard-name"
        label="Name"
        value={value}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setValue(e.target.value)
        }
        endAdornment={adornment}
      />
    </form>
  );
};
