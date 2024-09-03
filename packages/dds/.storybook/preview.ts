import '../src/styles/globalStyle.css';
import lightTheme from '../src/styles/lightTheme.css';

import type { Preview } from '@storybook/react';

import { withThemeByClassName } from '@storybook/addon-themes';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },

  decorators: [
    withThemeByClassName({
      themes: {
        light: lightTheme,
      },
      defaultTheme: 'light',
    }),
  ],
};

export default preview;
