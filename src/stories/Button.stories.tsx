import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import Button from '../components/Button';

/**
 * PAUL Industrial Gold Standard Button
 * 
 * The fundamental interaction element, engineered for precision and reliability.
 */
const meta: Meta<typeof Button> = {
  title: 'Actions/Button',
  component: Button,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A versatile button component with multiple variants, sizes, and states.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'outlined', 'ghost', 'danger'],
      description: 'The visual style of the button',
    },
    size: {
      control: 'radio',
      options: ['small', 'medium', 'large'],
      description: 'The size of the button',
    },
    isLoading: { control: 'boolean' },
    disabled: { control: 'boolean' },
    hasError: { control: 'boolean' },
  },
  args: { 
    onClick: fn(),
    label: 'Button',
    variant: 'primary',
    size: 'medium',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Default story showing the component in its basic state.
 */
export const Default: Story = {
  args: {
    label: 'Default Button',
  },
};

/**
 * Demonstrating visual variations.
 */
export const Variants: Story = {
  render: (args) => (
    <div style={{ display: 'flex', gap: '12px' }}>
      <Button {...args} variant="primary" label="Primary" />
      <Button {...args} variant="secondary" label="Secondary" />
      <Button {...args} variant="outlined" label="Outlined" />
      <Button {...args} variant="ghost" label="Ghost" />
      <Button {...args} variant="danger" label="Danger" />
    </div>
  ),
};

/**
 * Demonstrating interactive states.
 */
export const States: Story = {
  render: (args) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
      <div style={{ display: 'flex', gap: '12px' }}>
        <Button {...args} label="Normal" />
        <Button {...args} disabled label="Disabled" />
      </div>
      <div style={{ display: 'flex', gap: '12px' }}>
        <Button {...args} isLoading label="Loading" />
        <Button {...args} hasError label="Error State" />
      </div>
    </div>
  ),
};

/**
 * Demonstrating different sizes.
 */
export const Sizes: Story = {
  render: (args) => (
    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
      <Button {...args} size="small" label="Small" />
      <Button {...args} size="medium" label="Medium" />
      <Button {...args} size="large" label="Large" />
    </div>
  ),
};

/**
 * Demonstrating content variations.
 */
export const ContentVariations: Story = {
  render: (args) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
      <Button {...args} label="Short" />
      <Button {...args} label="Very long button label that might wrap or overflow" />
      <Button {...args} leftIcon={<span>←</span>} label="With Left Icon" />
      <Button {...args} rightIcon={<span>→</span>} label="With Right Icon" />
    </div>
  ),
};

/**
 * Demonstrating accessibility features.
 */
export const Accessibility: Story = {
  args: {
    label: 'Accessible Button',
    'aria-label': 'Custom accessible label',
    title: 'Tooltips are also accessible',
  },
};

/**
 * Demonstrating edge cases.
 */
export const EdgeCases: Story = {
  render: (args) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
      <Button {...args} label="" />
      <Button {...args} label=" " />
      <div style={{ width: '100px' }}>
        <Button {...args} label="Button in a narrow container" />
      </div>
    </div>
  ),
};
