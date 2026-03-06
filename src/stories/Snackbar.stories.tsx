import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import Snackbar from '../components/Snackbar';
import '../components/snackbar.css';

/**
 * PAUL Industrial Gold Standard Snackbar
 * 
 * A sleek, non-intrusive notification component for brief messages.
 */
const meta: Meta<typeof Snackbar> = {
  title: 'Messaging & Feedback/Snackbar',
  component: Snackbar,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A versatile snackbar component with support for multiple types, action buttons, and accessibility.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'select',
      options: ['info', 'success', 'warning', 'error'],
    },
    isOpen: { control: 'boolean' },
    onClose: { action: 'onClose' },
    onAction: { action: 'onAction' },
  },
  args: { 
    isOpen: true,
    message: 'Settings updated successfully.',
    type: 'success',
    onClose: fn(),
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
    <div style={{ height: '300px', display: 'flex', flexDirection: 'column', gap: '24px' }}>
      <div key="info"><Snackbar {...args} isOpen={true} onClose={args.onClose} type="info" message="An informational update." /></div>
      <div key="success"><Snackbar {...args} isOpen={true} onClose={args.onClose} type="success" message="Operation successful." /></div>
      <div key="warning"><Snackbar {...args} isOpen={true} onClose={args.onClose} type="warning" message="This action is irreversible." /></div>
      <div key="error"><Snackbar {...args} isOpen={true} onClose={args.onClose} type="error" message="An error occurred. Please try again." /></div>
    </div>
  ),
};

/**
 * Demonstrating interactive states.
 */
export const States: Story = {
  render: (args) => (
    <div style={{ height: '300px' }}>
      <Snackbar {...args} isOpen={true} onClose={args.onClose} actionLabel="Undo" onAction={fn()} message="Message deleted." />
    </div>
  ),
};

/**
 * Demonstrating different content variations.
 */
export const ContentVariations: Story = {
  render: (args) => (
    <div style={{ height: '300px', display: 'flex', flexDirection: 'column', gap: '24px' }}>
      <div key="short"><Snackbar {...args} isOpen={true} onClose={args.onClose} message="Short" /></div>
      <div key="long"><Snackbar {...args} isOpen={true} onClose={args.onClose} message="This is a much longer message that might need more space." /></div>
    </div>
  ),
};

/**
 * Demonstrating accessibility features.
 */
export const Accessibility: Story = {
  args: {
    'aria-label': 'Notification: Profile saved',
  },
};

/**
 * Demonstrating edge cases.
 */
export const EdgeCases: Story = {
  render: (args) => (
    <div style={{ height: '300px' }}>
      <Snackbar {...args} isOpen={true} onClose={args.onClose} message="" />
    </div>
  ),
};
