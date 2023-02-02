import { create } from '@storybook/theming/create';
import { addons } from '@storybook/addons';

addons.setConfig({
  disableTelemetry: true,
  enableShortcuts: false,
  showNav: true,
  showPanel: false,
  theme: storyBookTheme,
});

const storyBookTheme = create({
  base: 'light',
});
