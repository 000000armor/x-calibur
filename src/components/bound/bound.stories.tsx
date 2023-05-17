import type { Meta, StoryObj } from '@storybook/react';

import { Bound } from './bound';

const meta: Meta<typeof Bound> = {
  title: 'Utils/Bound',
  component: Bound,
  tags: ['autodocs'],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof Bound>;

export const Primary: Story = {
  args: {
    children: 'Bound',
  },
};
