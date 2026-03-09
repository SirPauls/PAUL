import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import Dropdown, { type DropdownProps } from '../components/Dropdown';
import '../components/dropdown.css';

const meta: Meta<typeof Dropdown> = {
  title: 'Forms/Dropdown',
  component: Dropdown,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    placeholder: 'Select an option...',
    options: [
      { value: '1', label: 'Option 1' },
      { value: '2', label: 'Option 2' },
      { value: '3', label: 'Option 3' },
    ],
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

const DropdownTemplate = (args: DropdownProps) => {
  const [value, setValue] = useState<string | undefined>();
  return <Dropdown {...args} value={value} onChange={setValue} />;
};

export const Default: Story = {
  render: (args) => <DropdownTemplate {...args} />,
};
