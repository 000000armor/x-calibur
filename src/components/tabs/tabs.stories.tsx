import type { Meta, StoryObj } from '@storybook/react';

import { Tabs } from './tabs';

const tabs = [
  {
    title: 'Tab 1',
  },
  {
    title: 'Tab 2',
  },
];

const meta: Meta<typeof Tabs> = {
  title: 'Utils/Tabs',
  component: Tabs,
  tags: ['autodocs'],
  args: {
    tabs,
  },
};

export default meta;
type Story = StoryObj<typeof Tabs>;

export const Base: Story = {
  args: {},
};
