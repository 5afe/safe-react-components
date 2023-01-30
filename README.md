# safe-react-components

![license](https://img.shields.io/github/license/safe-global/safe-react-components)
![tests](https://img.shields.io/github/actions/workflow/status/safe-global/safe-react-components/test.yml?branch=main)

This repository contains a [@mui/material](https://material-ui.com/) theming and a set of useful React components written in TypeScript.

These components and theming are being used to build the [Safe](https://github.com/safe-global/web-core) web and desktop app.

As Safe allows to integrate third party applications ("Safe Apps"), these components can also be used to build Safe Apps with the following benefits:

- **Native feel:** Build your Safe Apps with a similar style as the one used by the Safe. This makes your Safe Apps feel almost like a native feature of the Safe.
- **Blockchain-focused:** Some components solve common blockchain-related problems like inputs for ETH addresses and bigNumbers, identicon images, and more.
- **Save time:** No need to build all components from scratch.

## How to install

### Yarn

```bash
   yarn add @safe-global/safe-react-components
```

### npm

```bash
   npm install @safe-global/safe-react-components
```

## Integration

This library makes use of [@mui/material - 5.x.x](https://material-ui.com/) as `peer dependency`, this means you must install it in your Safe App. Make sure to provide a compatible version as defined by peer dependencies.

Once everything is installed, you have to instantiate the SafeThemeProvider with the desired theme mode (light/dark) and with the generated safe theme return a [ThemeProvider](https://mui.com/material-ui/customization/theming/#theme-provider) for the application.

```js
import { ThemeProvider } from '@mui/material/styles';
import { SafeThemeProvider } from '@safe-global/safe-react-components';

import App from './App';

export default () => (
  <SafeThemeProvider mode="light">
    {(safeTheme: Theme) => (
      <ThemeProvider theme={safeTheme}>
        <App />
      </ThemeProvider>
    )}
  </SafeThemeProvider>
);
```

## Using the components

You can import every component exported from `@safe-global/safe-react-components` in the same way.

```js
import { EthHashInfo } from '@safe-global/safe-react-components';

const App = (account) => {
  return <EthHashInfo address={account} showCopyButton />;
};

export default App;
```

## Adding the fonts

The fonts will be bundled on `build` and a `fonts.css` file will be provided as well for adding the corresponding `font-face` declarations

```
// from js/ts files
import '@safe-global/safe-react-components/dist/fonts.css'

// from css files
@import url(<path-to-node_modules>/@safe-global/safe-react-components/dist/fonts.css)
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

At Safe we have developed some example Safe Apps. Here is the [repository](https://github.com/safe-global/safe-react-apps).
