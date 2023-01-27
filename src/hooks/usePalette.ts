import { useMemo } from 'react';
import { Theme, useTheme } from '@mui/material';

import lightPalette from '../theme/lightPalette';
import darkPalette from '../theme/darkPalette';

const usePalette = (): any => {
  const theme: Theme = useTheme();

  const palette = useMemo(
    () => (theme.palette.mode === 'light' ? lightPalette : darkPalette),
    [theme]
  );

  return palette;
};

export default usePalette;
