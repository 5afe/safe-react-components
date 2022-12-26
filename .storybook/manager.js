import { addons } from '@storybook/addons';
import gnosisTheme from './gnosisTheme';


addons.setConfig({
  disableTelemetry: true,
  enableShortcuts: false,
  showNav: true,
  showPanel: false,
  theme: gnosisTheme,
});
