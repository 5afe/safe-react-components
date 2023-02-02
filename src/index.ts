import './assets/fonts/fonts.css';

import darkPalette from './theme/darkPalette';
import lightPalette from './theme/lightPalette';

import {
  default as EthHashInfo,
  EthHashInfoProps,
} from './components/EthHashInfo';

import {
  default as ExplorerButton,
  ExplorerButtonProps,
} from './components/ExplorerButton';

import { default as AddressInput } from './components/AddressInput';

import { default as useThemeMode } from './hooks/useThemeMode';

import { default as createSafeTheme } from './theme/safeTheme';

import { default as SafeThemeProvider } from './theme/SafeThemeProvider';

export type { EthHashInfoProps, ExplorerButtonProps };

export {
  EthHashInfo,
  ExplorerButton,
  AddressInput,
  useThemeMode,
  createSafeTheme,
  SafeThemeProvider,
  darkPalette,
  lightPalette,
};
