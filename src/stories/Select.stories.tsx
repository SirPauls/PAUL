import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import Select from '../components/Select';
import '../components/select.css';

/**
 * PAUL Industrial Gold Standard Select
 * 
 * A robust, accessible native select component for reliable user choices.
 */
const meta: Meta<typeof Select> = {
  title: 'Forms & Selection Controls/Select',
  component: Select,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A versatile native select component with support for labels, error states, and accessibility.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    disabled: { control: 'boolean' },
    hasError: { control: 'boolean' },
  },
  args: { 
    label: 'Preferred Language',
    options: [
      { value: 'en', label: 'English' },
      { value: 'es', label: 'Spanish' },
      { value: 'fr', label: 'French' },
      { value: 'de', label: 'German', disabled: true },
    ],
    disabled: false,
    hasError: false,
    onChange: fn(),
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
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      <div key="standard">
        <Select {...args} options={args.options} label="Standard Select" />
      </div>
      <div key="error">
        <Select {...args} options={args.options} label="Error State" hasError errorMessage="Please select a language." />
      </div>
    </div>
  ),
};

/**
 * Demonstrating interactive states.
 */
export const States: Story = {
  render: (args) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      <div key="disabled">
        <Select {...args} options={args.options} label="Disabled State" disabled value="en" />
      </div>
      <div key="focus">
        <Select {...args} options={args.options} label="Focus State" autoFocus />
      </div>
    </div>
  ),
};

/**
 * Demonstrating different content variations.
 */
export const ContentVariations: Story = {
  args: {
    label: 'Country Selection',
    options: [
      { value: 'us', label: '🇺🇸 United States' },
      { value: 'gb', label: '🇬🇧 United Kingdom' },
      { value: 'ca', label: '🇨🇦 Canada' },
      { value: 'au', label: '🇦🇺 Australia' },
    ],
  },
};

/**
 * Demonstrating accessibility features.
 */
export const Accessibility: Story = {
  args: {
    label: 'Accessible Select',
    'aria-label': 'Select your billing country',
    required: true,
  },
};

/**
 * Demonstrating edge cases.
 */
export const EdgeCases: Story = {
  render: (args) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      <div key="long-label">
        <Select {...args} options={args.options} label="Extremely long label that might cause layout issues if not handled properly" />
      </div>
      <div key="no-label">
        <Select {...args} options={args.options} label="" />
      </div>
      <div key="long-options">
        <Select {...args} options={[
          { value: '1', label: 'Very long select option label that might overflow the component width' }
        ]} />
      </div>
    </div>
  ),
};
