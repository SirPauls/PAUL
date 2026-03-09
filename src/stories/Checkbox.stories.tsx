import type { Meta, StoryObj } from '@storybook/react';
import Checkbox from '../components/Checkbox';
import '../components/checkbox.css';

const meta: Meta<typeof Checkbox> = {
  title: 'Forms/Checkbox',
  component: Checkbox,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'radio',
      options: ['sm', 'md', 'lg'],
    },
    disabled: { control: 'boolean' },
    checked: { control: 'boolean' },
  },
  args: {
    label: 'Checkbox Label',
    size: 'md',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Sizes: Story = {
  render: (args) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <Checkbox {...args} size="sm" label="Small" />
      <Checkbox {...args} size="md" label="Medium" />
      <Checkbox {...args} size="lg" label="Large" />
    </div>
  ),
};

export const States: Story = {
  render: (args) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <Checkbox {...args} label="Unchecked" />
      <Checkbox {...args} label="Checked" checked />
      <Checkbox {...args} label="Disabled" disabled />
      <Checkbox {...args} label="Checked & Disabled" checked disabled />
    </div>
  ),
};

export const NoLabel: Story = {
  args: {
    label: undefined,
  },
};
