import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import IconButton from '../components/IconButton';
import '../components/icon-button.css';

/**
 * PAUL Industrial Gold Standard IconButton
 * 
 * A compact, focused icon-only button for streamlined user actions.
 */
const meta: Meta<typeof IconButton> = {
  title: 'Actions/IconButton',
  component: IconButton,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A versatile icon-only button component with support for multiple variants, sizes, and interactive states.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
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
  },
  args: { 
    icon: <span>✎</span>,
    'aria-label': 'Edit',
    variant: 'primary',
    size: 'medium',
    isLoading: false,
    disabled: false,
    onClick: fn(),
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
    <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
      <IconButton {...args} icon={args.icon} variant="primary" aria-label="Primary" />
      <IconButton {...args} icon={args.icon} variant="secondary" aria-label="Secondary" />
      <IconButton {...args} icon={args.icon} variant="outlined" aria-label="Outlined" />
      <IconButton {...args} icon={args.icon} variant="ghost" aria-label="Ghost" />
      <IconButton {...args} variant="danger" icon={<span>✕</span>} aria-label="Delete" />
    </div>
  ),
};

/**
 * Demonstrating interactive states.
 */
export const States: Story = {
  render: (args) => (
    <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
      <IconButton {...args} icon={args.icon} aria-label="Normal" />
      <IconButton {...args} icon={args.icon} disabled aria-label="Disabled" />
      <IconButton {...args} icon={args.icon} isLoading aria-label="Loading" />
    </div>
  ),
};

/**
 * Demonstrating different sizes.
 */
export const Sizes: Story = {
  render: (args) => (
    <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
      <IconButton {...args} icon={args.icon} size="small" aria-label="Small" />
      <IconButton {...args} icon={args.icon} size="medium" aria-label="Medium" />
      <IconButton {...args} icon={args.icon} size="large" aria-label="Large" />
    </div>
  ),
};

/**
 * Demonstrating content variations.
 */
export const ContentVariations: Story = {
  render: (args) => (
    <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
      <IconButton {...args} icon={<span>❤</span>} aria-label="Like" />
      <IconButton {...args} icon={<span>★</span>} aria-label="Star" />
      <IconButton {...args} icon={<span>⚓</span>} aria-label="Anchor" />
    </div>
  ),
};

/**
 * Demonstrating accessibility features.
 */
export const Accessibility: Story = {
  args: {
    icon: <span>☰</span>,
    'aria-label': 'Main navigation menu',
    title: 'Open Menu',
  },
};

/**
 * Demonstrating edge cases.
 */
export const EdgeCases: Story = {
  render: (args) => (
    <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
      <IconButton {...args} icon={''} aria-label="Empty Icon" />
      <IconButton {...args} icon={<span>This is a very long icon content</span>} aria-label="Long Icon" />
    </div>
  ),
};
