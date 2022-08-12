import React from 'react';
import MenuItem from '@material-ui/core/MenuItem';
import SelectMUI, {
  SelectProps as SelectMuiProps,
} from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import InputLabel from '@material-ui/core/InputLabel';
import styled from 'styled-components';

import { Text } from '../../dataDisplay';

import { inputLabelStyles, inputStyles, errorStyles } from '../styles';

export type SelectItem = {
  id: string;
  label: string;
  subLabel?: string;
  iconUrl?: string;
};

type SelectProps = {
  id?: string;
  name: string;
  label: string;
  error?: string;
  helperText?: string | undefined;
  showErrorsInTheLabel?: boolean | undefined;
  items: Array<SelectItem>;
  activeItemId: string;
  onItemClick: (id: string) => void;
  fallbackImage?: string;
} & Omit<SelectMuiProps, 'error'>;

function Select({
  id,
  name,
  label,
  error,
  helperText,
  showErrorsInTheLabel,
  items,
  activeItemId,
  onItemClick,
  fallbackImage,
  fullWidth,
  disabled,
  ...rest
}: SelectProps): React.ReactElement {
  const [open, setOpen] = React.useState(false);

  const hasError = !!error;

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    onItemClick(event.target.value as string);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const onFallbackImage: React.ReactEventHandler<HTMLImageElement> = (e) => {
    if (!fallbackImage) {
      return;
    }

    (e.target as HTMLImageElement).onerror = null;
    (e.target as HTMLImageElement).src = fallbackImage;
  };

  return (
    <StyledFormControl
      variant="outlined"
      fullWidth={fullWidth}
      error={hasError}
      disabled={disabled}>
      <InputLabel error={hasError} disabled={disabled}>
        {showErrorsInTheLabel && hasError ? error : label}
      </InputLabel>
      <StyledSelect
        id={id}
        name={name}
        labelId={id}
        error={hasError}
        open={open}
        onClose={handleClose}
        onOpen={handleOpen}
        value={activeItemId}
        onChange={handleChange}
        label={label}
        variant="outlined"
        disabled={disabled}
        {...rest}>
        {items.map((i) => {
          return (
            <MenuItem value={i.id} key={i.id}>
              {i.iconUrl && (
                <IconImg
                  alt={i.label}
                  onError={onFallbackImage}
                  src={i.iconUrl}
                />
              )}
              <div>
                <Text size="sm" color="text">
                  {i.label}
                </Text>
                {i.subLabel && (
                  <Text size="sm" color="secondary" strong>
                    {i.subLabel}
                  </Text>
                )}
              </div>
            </MenuItem>
          );
        })}
      </StyledSelect>
      {(helperText || (error && showErrorsInTheLabel)) && (
        <StyledFormHelperText error={hasError && !showErrorsInTheLabel}>
          {helperText || error}
        </StyledFormHelperText>
      )}
    </StyledFormControl>
  );
}

const IconImg = styled.img`
  width: 20px;
  margin-right: 10px;
`;

const StyledSelect = styled(SelectMUI)`
  && {
    .MuiSelect-root {
      background: #fff;
    }

    .MuiSelect-select {
      display: flex;
      align-items: center;
      padding-left: 15px;
    }

    .MuiSelect-selectMenu {
      font-family: ${(props) => props.theme.fonts.fontFamily};
    }

    && {
      fieldset {
        border: 1px solid
          ${({ theme, value, error }) =>
            error
              ? theme.colors.error
              : value
              ? theme.colors.inputFilled
              : theme.colors.inputDisabled};
      }
    }
  }
`;

const StyledFormControl = styled(FormControl)`
  && {
    ${inputLabelStyles}
    ${inputStyles}
    ${errorStyles}
  }
`;

const StyledFormHelperText = styled(FormHelperText)`
  && {
    font-family: ${(props) => props.theme.fonts.fontFamily};
  }
`;

export default Select;
