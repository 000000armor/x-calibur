import type { Meta, StoryObj } from '@storybook/react';

import { Text } from './text';

const meta: Meta<typeof Text> = {
  title: 'Typography/Text',
  component: Text,
  tags: ['autodocs'],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof Text>;

export const Base: Story = {
  args: {
    children: 'lorem ipsum dolor sit amet consectetur adipisicing elit.',
  },
};
