import type { Meta, StoryObj } from '@storybook/react';
import { Panel } from './panel';

const meta: Meta<typeof Panel> = {
  component: Panel,
  title: 'Panel',
};
export default meta;
type Story = StoryObj<typeof Panel>;

export const Primary = {
  args: {},
};
