import { TextFieldProps } from '@material-ui/core';
import { css } from 'styled-components';

export const inputLabelStyles = css<TextFieldProps>`
  &:hover {
    .MuiInputLabel-root {
      &.MuiInputLabel-shrink:not(.Mui-focused):not(.Mui-disabled) {
        color: ${({ theme }) => theme.colors.primary};
        &.Mui-error {
          color: ${({ theme }) => theme.colors.error};
        }
      }
    }
  }

  .MuiInputLabel-root {
    font-family: ${({ theme }) => theme.fonts.fontFamily};
    color: ${({ theme }) => theme.colors.inputText};
    &.MuiInputLabel-shrink {
      color: ${({ theme }) => theme.colors.inputText};

      &.Mui-error {
        color: ${({ theme }) => theme.colors.error};
      }
    }
    &.Mui-disabled {
      color: ${({ theme }) => theme.colors.inputDisabled};
    }

    /* Hide Label */
    ${({ hiddenLabel }) =>
      hiddenLabel
        ? `border: 0;
            border: 1px solid red;    
            clip: rect(0 0 0 0);
            height: 1px;
            margin: -1px;
            overflow: hidden;
            padding: 0;
            position: absolute;
            width: 1px;`
        : ''}
  }
`;

export const inputStyles = css<TextFieldProps>`
  .MuiOutlinedInput-root {
    font-family: ${({ theme }) => theme.fonts.fontFamily};
    color: ${({ theme }) => theme.colors.inputText};
    /* Input */
    .MuiOutlinedInput-input {
      &::placeholder,
      &.Mui-disabled {
        cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'auto')};
        color: ${({ theme }) => theme.colors.inputDefault};
      }
    }

    /* fieldset */
    .MuiOutlinedInput-notchedOutline {
      ${({ hiddenLabel }) => (hiddenLabel ? 'top: 0' : '')};
      transition: border-color 0.2s ease-in-out;
      border: 1px solid
        ${({ theme, value }) =>
          value ? theme.colors.inputFilled : theme.colors.inputDisabled};
      border-radius: 6px;
      legend {
        display: ${({ hiddenLabel }) => (hiddenLabel ? 'none' : 'block')};
      }
    }

    &:hover {
      .MuiOutlinedInput-notchedOutline {
        border-color: ${({ theme }) => theme.colors.primary};
      }
    }

    &.Mui-focused {
      .MuiOutlinedInput-notchedOutline {
        border-color: ${({ theme }) => theme.colors.inputFilled};
      }
      &.Mui-error {
        .MuiOutlinedInput-notchedOutline {
          border-color: ${({ theme }) => theme.colors.error};
        }
      }
    }
    &.Mui-disabled {
      .MuiOutlinedInput-notchedOutline {
        border-color: ${({ theme }) => theme.colors.inputDisabled};
      }
    }
  }
  .MuiFormLabel-filled
    + .MuiOutlinedInput-root:not(:hover):not(.Mui-disabled)
    .MuiOutlinedInput-notchedOutline {
    border-color: ${({ theme, error }) =>
      error ? theme.colors.error : theme.colors.inputFilled};
  }
`;

export const errorStyles = css<TextFieldProps>`
  .Mui-error {
    &:hover,
    .Mui-focused {
      .MuiOutlinedInput-notchedOutline {
        border-color: ${({ theme }) => theme.colors.error};
      }
    }
    .MuiOutlinedInput-notchedOutline {
      border-color: ${({ theme }) => theme.colors.error};
    }
  }
`;
