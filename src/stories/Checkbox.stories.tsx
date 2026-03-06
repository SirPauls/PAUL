import type { Meta, StoryObj } from '@storybook/react';
import Checkbox from '../components/Checkbox';
import './checkbox.css';

/**
 * PAUL Industrial Gold Standard Checkbox
 * 
 * A clean, accessible checkbox component for reliable user selection.
 */
const meta: Meta<typeof Checkbox> = {
  title: 'Components/Checkbox',
  component: Checkbox,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A robust checkbox component with support for labels, error states, and accessibility.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    checked: { control: 'boolean' },
    disabled: { control: 'boolean' },
    hasError: { control: 'boolean' },
    label: { control: 'text' },
  },
  args: { 
    label: 'Checkbox Label',
    checked: false,
    disabled: false,
    hasError: false,
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Default story showing the component in its basic state.
 */
export const Default: Story = {};

/**
 * Demonstrating visual variations.
 */
export const Variants: Story = {
  render: (args) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
      <Checkbox {...args} label="Unchecked" checked={false} />
      <Checkbox {...args} label="Checked" checked={true} />
    </div>
  ),
};

/**
 * Demonstrating interactive states.
 */
export const States: Story = {
  render: (args) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
      <Checkbox {...args} label="Disabled Unchecked" disabled checked={false} />
      <Checkbox {...args} label="Disabled Checked" disabled checked={true} />
      <Checkbox {...args} label="Error State" hasError />
    </div>
  ),
};

/**
 * Demonstrating content variations.
 */
export const ContentVariations: Story = {
  render: (args) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
      <Checkbox {...args} label="Short Label" />
      <div style={{ width: '200px' }}>
        <Checkbox {...args} label="Very long checkbox label that might wrap or overflow in its container" />
      </div>
    </div>
  ),
};

/**
 * Demonstrating accessibility features.
 */
export const Accessibility: Story = {
  args: {
    label: 'Accessible Checkbox',
    'aria-label': 'Subscribe to our newsletter',
  },
};

/**
 * Demonstrating edge cases.
 */
export const EdgeCases: Story = {
  render: (args) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
      <Checkbox {...args} label="" />
      <Checkbox {...args} label=" " />
    </div>
  ),
};
