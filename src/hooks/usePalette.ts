import { useMemo } from 'react';
import {
  PaletteOptions,
  SimplePaletteColorOptions,
  Theme,
  useTheme,
} from '@mui/material';

import lightPalette from '../theme/colors';
import darkPalette from '../theme/colors-dark';

const usePalette = (): any => {
  const theme: Theme = useTheme();

  const palette = useMemo(
    () => (theme.palette.mode === 'light' ? lightPalette : darkPalette),
    [theme]
  );

  return palette;
};

export default usePalette;
