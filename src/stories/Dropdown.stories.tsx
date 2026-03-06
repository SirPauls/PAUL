import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import Dropdown from '../components/Dropdown';
import '../components/dropdown.css';

/**
 * PAUL Industrial Gold Standard Dropdown
 * 
 * A sleek, accessible dropdown component for robust user selection.
 */
const meta: Meta<typeof Dropdown> = {
  title: 'Containers & Layout/Dropdown',
  component: Dropdown,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A versatile dropdown component with support for multiple options, disabled states, error states, and custom placeholders.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    onChange: { action: 'changed' },
    disabled: { control: 'boolean' },
    hasError: { control: 'boolean' },
    placeholder: { control: 'text' },
  },
  args: { 
    options: [
      { value: '1', label: 'Option 1' },
      { value: '2', label: 'Option 2' },
      { value: '3', label: 'Option 3', disabled: true },
      { value: '4', label: 'Option 4' },
    ],
    placeholder: 'Select an option',
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
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', minHeight: '300px' }}>
      <Dropdown {...args} options={args.options} placeholder="Standard Dropdown" />
      <Dropdown {...args} options={args.options} placeholder="Error State" hasError />
    </div>
  ),
};

/**
 * Demonstrating interactive states.
 */
export const States: Story = {
  render: (args) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', minHeight: '300px' }}>
      <Dropdown {...args} options={args.options} placeholder="Disabled Dropdown" disabled />
      <Dropdown {...args} options={args.options} value="2" placeholder="With Value" />
    </div>
  ),
};

/**
 * Demonstrating different content variations.
 */
export const ContentVariations: Story = {
  args: {
    options: [
      { value: 'apple', label: '🍎 Apple' },
      { value: 'banana', label: '🍌 Banana' },
      { value: 'cherry', label: '🍒 Cherry' },
      { value: 'dragonfruit', label: '🐲 Dragonfruit' },
    ],
    placeholder: 'Choose a fruit',
  },
};

/**
 * Demonstrating accessibility features.
 */
export const Accessibility: Story = {
  args: {
    placeholder: 'Accessible Dropdown',
    'aria-label': 'Select your preferred language',
  },
};

/**
 * Demonstrating edge cases.
 */
export const EdgeCases: Story = {
  render: (args) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', minHeight: '300px' }}>
      <Dropdown {...args} options={[]} placeholder="Empty Options" />
      <Dropdown {...args} options={[
        { value: '1', label: 'Very long option label that might wrap or overflow in its container' }
      ]} />
    </div>
  ),
};
