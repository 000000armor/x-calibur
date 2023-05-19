import type { Meta, StoryObj } from '@storybook/react';

import { Input } from './input';

const meta: Meta<typeof Input> = {
  title: 'Main/Input',
  component: Input,
  tags: ['autodocs'],
  argTypes: {},
  args: {
    value: 'lorem ipsum dolor sit amet consectetur adipisicing elit.',
    label: 'label',
    id: 'id',
  },
};

export default meta;

type Base = StoryObj<typeof Input>;

export const Base: Base = {};
