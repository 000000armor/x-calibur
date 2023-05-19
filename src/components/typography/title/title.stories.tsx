import type { Meta, StoryObj } from '@storybook/react';

import { Title, TitleProps } from './title';

const meta: Meta<typeof Title> = {
  title: 'Typography/Title',
  component: Title,
  tags: ['autodocs'],
  argTypes: {},
  args: {
    size: 1,
    children: 'lorem ipsum dolor sit amet consectetur adipisicing elit.',
  },
};

export default meta;
type Story = StoryObj<typeof Title>;

export const Base: Story = {};
