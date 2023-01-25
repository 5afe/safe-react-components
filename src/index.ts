import './assets/fonts/fonts.css';

import darkPalette from './theme/colors-dark';
import lightPalette from './theme/colors';

import { default as EthHashInfo } from './components/EthHashInfo';
import { default as ExplorerButton } from './components/ExplorerButton';
import { default as AddressInput } from './components/AddressInput';

import { default as useThemeMode } from './hooks/useThemeMode';

import { default as createSafeTheme } from './theme/safeTheme';
import * as declarations from './theme/safeTheme';
export {
  EthHashInfo,
  ExplorerButton,
  AddressInput,
  useThemeMode,
  createSafeTheme,
  darkPalette,
  lightPalette,
  declarations,
};
