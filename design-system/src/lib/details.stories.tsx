import type { Meta, StoryObj } from '@storybook/react';
import { Details } from './details';

const meta: Meta<typeof Details> = {
  component: Details,
  title: 'Details',
};
export default meta;
type Story = StoryObj<typeof Details>;

export const Primary = {
  args: {},
};
