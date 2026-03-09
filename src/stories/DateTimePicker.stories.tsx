import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import DateTimePicker, { type DateTimePickerProps } from '../components/DateTimePicker';
import '../components/datetimepicker.css';

const meta: Meta<typeof DateTimePicker> = {
  title: 'Forms/DateTimePicker',
  component: DateTimePicker,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

const DateTimePickerTemplate = (args: DateTimePickerProps) => {
  const [date, setDate] = useState(new Date());
  return <DateTimePicker {...args} value={date} onChange={setDate} />;
};

export const Default: Story = {
  render: (args) => <DateTimePickerTemplate {...args} />,
};
