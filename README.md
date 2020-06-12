# safe-react-components

![Badge](https://raw.githubusercontent.com/storybooks/brand/master/badge/badge-storybook.svg) 
![GitHub release (latest SemVer)](https://img.shields.io/github/v/release/gnosis/safe-react-components?sort=semver)
![GitHub](https://img.shields.io/github/license/gnosis/safe-react-components)


This repository contains a set of React components written in typescript.

These components are being used to build [Safe-multisig](https://github.com/gnosis/safe-react) app.

As Safe-multisig allows to integrate third party applications, Gnosis team recommends to build these apps using this components to get the following benefits:

- Same style as the one used Safe-multisig. Making third-party apps looks native.
- As the space used to render third-party apps is reduced, most of the components will be optimized to render properly in different resolutions.
- Blockchain oriented: Some components will allow you to solve common problems like, inputs for ETH addresses and bigNumbers, Identicon images, etc.
- Save time, as you don't have to start from scratch building your safe-app.


## How to install

```bash
   yarn add @gnosis.pm/safe-react-components
```

## Integration

This library makes use of [material-ui](https://material-ui.com/) as a `peerDependency`, it means you must install it in your Safe-app. Make sure to provide the same version as the one being used by the current version of this library.

Once everything is installed, you have to instantiate a [ThemeProvider](https://styled-components.com/docs/api#themeprovider) from [styled-components](https://@gnosis.pm/safe-react-components/).

This example uses the theme exported by safe-react-components. Here, you can extend this theme to customize it to your needs.

```js
import { ThemeProvider } from 'styled-components';
import { theme } from '@gnosis.pm/safe-react-components';

import App from './App';

export default () => (
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>
);
```

### Using the same fonts as Safe-multisig

If you want your app to have the same fonts as the one used by Safe-multisig you need to do the following.

```js
import { createGlobalStyle } from 'styled-components';
import avertaFont from '@gnosis.pm/safe-react-components/dist/fonts/averta-normal.woff2';
import avertaBoldFont from '@gnosis.pm/safe-react-components/dist/fonts/averta-bold.woff2';

const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: 'Averta';
        src: local('Averta'), local('Averta Bold'),
        url(${avertaFont}) format('woff2'),
        url(${avertaBoldFont}) format('woff');
    }
`;

export default GlobalStyle;
```

And then include it in the root of your App.

```js
import React from "react";
import ReactDOM from "react-dom";
import GlobalStyles from './global';

import App from './App';

ReactDOM.render(
  <>
    <GlobalStyles />
    <App>
  </>,
  document.getElementById('root')
);
```

## Using the components

You can import every component exported from @gnosis.pm/safe-react-components in the same way.

```js
import { Text } from '@gnosis.pm/safe-react-components';

const App = () => {
  return <Text size="lg">some text</Text>;
}

export default App;

```

## Storybook

You can find documentation and examples of all our components in this [storybook](https://components.gnosis-safe.io/).

## Examples
At Gnosis we have developed some Safe-apps. Here is the [repository](https://github.com/gnosis/safe-react-apps). 
