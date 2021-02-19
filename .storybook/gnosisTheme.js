import { create } from '@storybook/theming/create';

export default create({
  base: '#f7f5f5',

  colorPrimary: '#008C73',
  colorSecondary: '#005546',

  // UI
  appBg: 'white',
  appContentBg: 'white',
  appBorderColor: 'grey',
  appBorderRadius: 4,  

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
  brandImage: 'https://miro.medium.com/max/1060/1*DZopze1Xtir7mZHraVNZ_w.png',
  //brandImage: 'https://gnosis-safe.readthedocs.io/en/latest/_images/safe-banner.svg',
});