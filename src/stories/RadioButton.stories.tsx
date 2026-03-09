import type { Meta, StoryObj } from '@storybook/react';
import RadioButton from '../components/RadioButton';
import '../components/radiobutton.css';

const meta: Meta<typeof RadioButton> = {
  title: 'Forms/RadioButton',
  component: RadioButton,
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
  },
  args: {
    label: 'Radio Button Label',
    size: 'md',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Sizes: Story = {
  render: (args) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <RadioButton {...args} size="sm" label="Small" name="sizes" />
      <RadioButton {...args} size="md" label="Medium" name="sizes" defaultChecked />
      <RadioButton {...args} size="lg" label="Large" name="sizes" />
    </div>
  ),
};

export const States: Story = {
  render: (args) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <RadioButton {...args} label="Unchecked" name="states" />
      <RadioButton {...args} label="Checked" name="states" defaultChecked />
      <RadioButton {...args} label="Disabled" name="states" disabled />
      <RadioButton {...args} label="Checked & Disabled" name="states" defaultChecked disabled />
    </div>
  ),
};
