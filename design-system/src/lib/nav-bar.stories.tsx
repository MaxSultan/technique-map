import type { Meta, StoryObj } from '@storybook/react';
import { NavBar } from './nav-bar';

const meta: Meta<typeof NavBar> = {
  component: NavBar,
  title: 'NavBar',
};
export default meta;
type Story = StoryObj<typeof NavBar>;

export const Primary = {
  args: {},
};
