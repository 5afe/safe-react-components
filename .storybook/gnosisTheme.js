import { create } from '@storybook/theming/create';
import theme from '../src/theme/safeTheme.tsx';
import logoSvg from './logo.svg';

export default create({
  base: 'light',

  // colorPrimary: theme.palette.primary.main,
  // colorSecondary: theme.palette.secondary.main,

  // UI
  // appBg: 'white',
  // appContentBg: 'white',
  // appBorderColor: 'grey',
  // appBorderRadius: 4,

  // Text colors
  // textColor: '#333333',
  // textInverseColor: 'rgba(255,255,255,0.9)',

  // Toolbar default and active colors
  // barTextColor: 'silver',
  // barSelectedColor: 'black',
  // barBg: 'silver',

  // Form colors
  // inputBg: 'white',
  // inputBorder: 'silver',
  // inputTextColor: 'black',
  // inputBorderRadius: 4,

  brandTitle: 'Safe theme',
  brandUrl: 'https://app.safe.global',
  brandImage: 'https://miro.medium.com/max/1060/1*DZopze1Xtir7mZHraVNZ_w.png',
  brandImage: logoSvg,
});
