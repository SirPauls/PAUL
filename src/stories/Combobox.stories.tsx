import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import Combobox, { type ComboboxProps } from '../components/Combobox';
import '../components/combobox.css';

const meta: Meta<typeof Combobox> = {
  title: 'Forms/Combobox',
  component: Combobox,
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
      { value: '4', label: 'Another Option' },
      { value: '5', label: 'Something Else' },
    ],
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

const ComboboxTemplate = (args: ComboboxProps) => {
  const [value, setValue] = useState<string | undefined>();
  return <Combobox {...args} value={value} onChange={setValue} />;
};

export const Default: Story = {
  render: (args) => <ComboboxTemplate {...args} />,
};
