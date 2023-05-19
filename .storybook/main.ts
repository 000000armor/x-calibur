import type { StorybookConfig } from '@storybook/nextjs';

const path = require('path');
// {
//   from: '../stories/frameworks/nextjs_default-js/fonts',
//   to: 'stories/frameworks/nextjs_default-js/fonts'
// }
const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  staticDirs: ['../public'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
  ],
  framework: {
    name: '@storybook/nextjs',
    options: {},
  },
  docs: {
    autodocs: 'tag',
  },
};
export default config;
