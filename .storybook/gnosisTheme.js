import { create } from '@storybook/theming/create';

export default create({
  base: '#f7f5f5',

  colorPrimary: '#008C73',
  colorSecondary: '#005546',

  // UI
  appBg: '#f7f5f5',
  appContentBg: 'white',
  appBorderColor: 'grey',
  appBorderRadius: 4,

  // Typography
  fontBase: '"Roboto", sans-serif',
  fontCode: 'monospace',

  // Text colors
  textColor: '#333333',
  textInverseColor: 'rgba(255,255,255,0.9)',

  // Toolbar default and active colors
  barTextColor: 'silver',
  barSelectedColor: 'black',
  barBg: 'silver',

  // Form colors
  inputBg: 'white',
  inputBorder: 'silver',
  inputTextColor: 'black',
  inputBorderRadius: 4,

  brandTitle: 'Gnosis theme',
  brandUrl: 'https://gnosis.io',
  brandImage: 'https://miro.medium.com/fit/c/160/160/1*_8QTHtOTxPVQTYaWJOE6_w@2x.png',
  // brandImage: 'https://miro.medium.com/max/1060/1*DZopze1Xtir7mZHraVNZ_w.png',
});