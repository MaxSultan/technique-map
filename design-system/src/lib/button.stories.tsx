import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './button';
import { BookIcon } from './icons/book-icon';

const meta: Meta<typeof Button> = {
  component: Button,
  title: 'Button',
};
export default meta;
type Story = StoryObj<typeof Button>;

export const BasicButton = (args) => <Button Icon={BookIcon} text="A Button" {...args}/>

export const Primary = {
  args: {},
};
