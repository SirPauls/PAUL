import type { Meta, StoryObj } from '@storybook/react';
import Radio from '../components/Radio';
import './radio.css';

/**
 * PAUL Industrial Gold Standard Radio
 * 
 * A clean, accessible radio component for focused user choice.
 */
const meta: Meta<typeof Radio> = {
  title: 'Components/Radio',
  component: Radio,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A robust radio button component with support for labels, error states, and accessibility.',
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
    label: 'Radio Label',
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
      <Radio {...args} name="choice" label="Option A" value="a" defaultChecked />
      <Radio {...args} name="choice" label="Option B" value="b" />
    </div>
  ),
};

/**
 * Demonstrating interactive states.
 */
export const States: Story = {
  render: (args) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
      <Radio {...args} label="Disabled Unchecked" disabled checked={false} />
      <Radio {...args} label="Disabled Checked" disabled checked={true} />
      <Radio {...args} label="Error State" hasError />
    </div>
  ),
};

/**
 * Demonstrating content variations.
 */
export const ContentVariations: Story = {
  render: (args) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
      <Radio {...args} label="Short Label" />
      <div style={{ width: '200px' }}>
        <Radio {...args} label="Very long radio button label that might wrap or overflow in its container" />
      </div>
    </div>
  ),
};

/**
 * Demonstrating accessibility features.
 */
export const Accessibility: Story = {
  args: {
    label: 'Accessible Radio',
    'aria-label': 'Select your preferred plan',
  },
};

/**
 * Demonstrating edge cases.
 */
export const EdgeCases: Story = {
  render: (args) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
      <Radio {...args} label="" />
      <Radio {...args} label=" " />
    </div>
  ),
};
