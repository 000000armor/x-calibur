import { montserrat } from './../src/styles/fonts';
import type { Preview } from '@storybook/react';
import '../src/styles/globals.scss';

document.body.classList.add(montserrat.className);

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;
