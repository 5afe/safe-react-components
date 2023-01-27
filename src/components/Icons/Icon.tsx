import * as React from 'react';
import SvgIcon from '@mui/material/SvgIcon';
import usePalette from '../../hooks/usePalette';

type IconProps = {
  component: typeof SvgIcon;
};

const Icon = ({ component }: IconProps): React.ReactElement => {
  const palette = usePalette();

  return (
    <SvgIcon
      component={component}
      inheritViewBox
      fontSize="inherit"
      sx={{
        width: '1rem',
        height: '1rem',
        '& path': {
          fill: palette.border.main,
        },
      }}
    />
  );
};

export default Icon;
