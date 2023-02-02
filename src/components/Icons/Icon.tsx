import * as React from 'react';
import SvgIcon from '@mui/material/SvgIcon';

type IconProps = {
  component: typeof SvgIcon;
};

const Icon = ({ component }: IconProps): React.ReactElement => {
  return (
    <SvgIcon
      component={component}
      inheritViewBox
      fontSize="inherit"
      sx={(theme) => ({
        width: '1rem',
        height: '1rem',
        '& path': {
          fill: theme.palette.border.main,
        },
      })}
    />
  );
};

export default Icon;
