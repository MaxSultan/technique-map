import type { Meta, StoryObj } from '@storybook/react';
import { DatePicker } from './date-picker';
import { useState } from 'react';

const meta: Meta<typeof DatePicker> = {
  component: DatePicker,
  title: 'DatePicker',
};
export default meta;
type Story = StoryObj<typeof DatePicker>;

export const BasicDatePicker = (args) => {
  const [selectedDate, setSelectedDate] = useState('mm-dd-yyyy');
  return (
    <DatePicker
      value={selectedDate}
      setValue={setSelectedDate}
      {...args}
    />
  );
};

export const Primary = {
  args: {},
};
