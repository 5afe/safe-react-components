# safe-react-components

[![Storybook](https://raw.githubusercontent.com/storybooks/brand/master/badge/badge-storybook.svg)](https://components.gnosis-safe.io/)
[![npm](https://img.shields.io/npm/v/@gnosis.pm/safe-react-components)](https://www.npmjs.com/package/@gnosis.pm/safe-react-components)

This repository contains a set of React components written in TypeScript.

These components are being used to build the [Gnosis Safe](https://github.com/gnosis/safe-react) web and desktop app.

As Gnosis Safe allows to integrate third party applications ("Safe Apps"), these components can also be used to build Safe Apps with the following benefits:

- **Native feel:** Build your Safe Apps with a similar style as the one used by Gnosis Safe. This makes your Safe Apps feel almost like a native feature of the Gnosis Safe.
- **Responsive:** Most of the components will are optimized to render properly in different resolutions.
- **Blockchain-focused:** Some components solve common blockchain-related problems like inputs for ETH addresses and bigNumbers, identicon images, and more.
- **Save time:** No need to build all components from scratch.

## How to install

```bash
   yarn add @gnosis.pm/safe-react-components

   npm install @gnosis.pm/safe-react-components
```

## Integration

This library makes use of [material-ui - 4.X.X](https://material-ui.com/) and [styled-components - 5.X.X](https://styled-components.com/) as `peer dependencies`, this means you must install it in your Safe App. Make sure to provide the same version as the one being used by the current version of this library.


Once everything is installed, you have to instantiate a [ThemeProvider](https://styled-components.com/docs/api#themeprovider) from [styled-components](https://styled-components.com/).

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

### Using the same fonts as Gnosis Safe

If you want your Safe App to have the same fonts as the one used by Gnosis Safe you need to do the following.

```js
import { createGlobalStyle } from 'styled-components';
import avertaFont from '@gnosis.pm/safe-react-components/dist/fonts/averta-normal.woff2';
import avertaBoldFont from '@gnosis.pm/safe-react-components/dist/fonts/averta-bold.woff2';

const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: 'Averta';
        font-display: swap;
        src: local('Averta'), local('Averta Bold'),
        url(${avertaFont}) format('woff2'),
        url(${avertaBoldFont}) format('woff');
    }
`;

export default GlobalStyle;
```

And then include it in the root of your Safe App.

```js
import React from 'react';
import ReactDOM from 'react-dom';
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

You can import every component exported from `@gnosis.pm/safe-react-components` in the same way.

```js
import { Text } from '@gnosis.pm/safe-react-components';

const App = () => {
  return <Text size="lg">some text</Text>;
};

export default App;
```

## Storybook

You can find documentation and examples of all our components in this [storybook](https://components.gnosis-safe.io/).

## Local development

To develop on your local machine, install the dependencies (including the peer dependencies):
```
yarn
```

Launch the Storybook:
```
yarn storybook
```

## Testing

Snapshot tests are generated automatically from the Storybook stories using the [StoryShots addon](https://github.com/storybookjs/storybook/tree/master/addons/storyshots/storyshots-core).

To run the tests locally:
```
yarn test
```

Alternatively, run `yarn test --watch` to re-run the tests for each modification you do.
Before you commit your changes, you need to update the snapshots and commit them as well. To do so, run `yarn test -u`.
When the command finishes, the resulting snapshots will be the new baseline.

If you want to add a new Jest test, make sure to put a file with the `.test.tsx` extension into the same directory as the corresponding component.

## Examples

At Gnosis we have developed some example Safe Apps. Here is the [repository](https://github.com/gnosis/safe-react-apps).
