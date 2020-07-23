import React from 'react';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import SelectMUI from '@material-ui/core/Select';
import styled from 'styled-components';

import { Text } from '../../dataDisplay';

const IconImg = styled.img`
  width: 20px;
  margin-right: 10px;
`;

const StyledSelect = styled(SelectMUI)`
  background-color: ${(props) => props.theme.colors.separator};
  border-radius: 5px;
  height: 56px;
  width: 140px;

  .MuiSelect-select {
    display: flex;
    align-items: center;
    padding-left: 15px;
  }

  .MuiSelect-selectMenu {
    font-family: ${(props) => props.theme.fonts.fontFamily};
  }

  &.MuiInput-underline:hover:not(.Mui-disabled):before {
    border-bottom: 2px solid ${(props) => props.theme.colors.primary};
  }
  &.MuiInput-underline:after {
    border-bottom: 2px solid ${(props) => props.theme.colors.primary};
  }
`;

export type SelectItem = {
  id: string;
  label: string;
  subLabel?: string;
  iconUrl?: string;
};

type Props = {
  items: Array<SelectItem>;
  activeItemId: string;
  onItemClick: (id: string) => void;
  id?: string;
  fallbackImage?: string;
};

function Select({
  items,
  activeItemId,
  onItemClick,
  id,
  fallbackImage,
  ...rest
}: Props): React.ReactElement {
  const [open, setOpen] = React.useState(false);

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
    <div>
      <FormControl>
        <StyledSelect
          labelId={id ? id : 'generic-select'}
          id={id ? id : 'generic-select'}
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          value={activeItemId}
          onChange={handleChange}
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
      </FormControl>
    </div>
  );
}

export default Select;
