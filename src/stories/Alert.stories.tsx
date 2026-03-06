import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import Alert from '../components/Alert';
import '../components/alert.css';

/**
 * PAUL Industrial Gold Standard Alert
 * 
 * A reliable, informative alert component for communicating important feedback.
 */
const meta: Meta<typeof Alert> = {
  title: 'Messaging & Feedback/Alert',
  component: Alert,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'A versatile alert component with multiple types, custom titles, and dismissible options.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'select',
      options: ['info', 'success', 'warning', 'error'],
      description: 'The visual style of the alert',
    },
    persistent: { control: 'boolean' },
    onClose: { action: 'onClose' },
  },
  args: { 
    type: 'info',
    title: 'Heads up!',
    children: 'This is a standard alert message.',
    onClose: fn(),
    persistent: false,
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Default story showing the component in its basic state.
 */
export const Default: Story = {};

/**
 * Demonstrating all visual variations.
 */
export const Variants: Story = {
  render: (args) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <Alert {...args} type="info" title="Information">System update scheduled for tonight.</Alert>
      <Alert {...args} type="success" title="Success">Your changes have been saved successfully.</Alert>
      <Alert {...args} type="warning" title="Warning">Your subscription will expire in 3 days.</Alert>
      <Alert {...args} type="error" title="Error">Unable to connect to the server. Please try again.</Alert>
    </div>
  ),
};

/**
 * Demonstrating interactive states.
 */
export const States: Story = {
  render: (args) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <Alert {...args} title="Dismissible Alert">You can close this alert.</Alert>
      <Alert {...args} title="Persistent Alert" persistent>This alert cannot be closed by the user.</Alert>
    </div>
  ),
};

/**
 * Demonstrating different content variations.
 */
export const ContentVariations: Story = {
  render: (args) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <Alert {...args} title="Short Title">Short content.</Alert>
      <Alert {...args} title="Long Title and Content">
        This is a much longer alert message that explains something in great detail, 
        potentially spanning across multiple lines to show how the layout adapts.
      </Alert>
      <Alert {...args}>Alert with no title, only content.</Alert>
    </div>
  ),
};

/**
 * Demonstrating accessibility features.
 */
export const Accessibility: Story = {
  args: {
    type: 'error',
    title: 'Screen Reader Alert',
    children: 'This alert uses role="alert" to ensure screen readers announce it immediately.',
  },
};

/**
 * Demonstrating edge cases.
 */
export const EdgeCases: Story = {
  render: (args) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <Alert {...args} title="">Alert with an empty title string.</Alert>
      <Alert {...args} title="Empty Content">{''}</Alert>
      <div style={{ width: '200px' }}>
        <Alert {...args} title="Narrow Context">Alert in a very narrow container.</Alert>
      </div>
    </div>
  ),
};
