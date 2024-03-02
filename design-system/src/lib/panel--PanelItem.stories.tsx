import type { Meta, StoryObj } from '@storybook/react';
import { PanelItem } from './panel';

const meta: Meta<typeof PanelItem> = {
  component: PanelItem,
  title: 'PanelItem',
};
export default meta;
type Story = StoryObj<typeof PanelItem>;

export const Primary = {
  args: {},
};
