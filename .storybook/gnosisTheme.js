import { create } from '@storybook/theming/create';
import theme from '../src/theme.ts';

export default create({
  base: theme.colors.background,

  colorPrimary: '#60fc99',
  colorSecondary: '#60fc99',

  // UI
  appBg: 'black',
  appContentBg: 'black',
  appBorderColor: '#60fc99',
  appBorderRadius: 4,

  // Text colors
  textColor: '#60fc99',
  textInverseColor: '#60fc99',

  // Toolbar default and active colors
  barTextColor: '#60fc99',
  barSelectedColor: '#60fc99',
  barBg: 'black',

  // Form colors
  inputBg: 'black',
  inputBorder: '#60fc99',
  inputTextColor: '#60fc99',
  inputBorderRadius: 4,

  brandTitle: 'Gnosis theme',
  brandUrl: 'https://gnosis.io',
  brandImage: 'https://miro.medium.com/max/1060/1*DZopze1Xtir7mZHraVNZ_w.png',
  //brandImage: 'https://gnosis-safe.readthedocs.io/en/latest/_images/safe-banner.svg',
});