import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import Alert from '../components/Alert';
import '../components/alert.css';

/**
 * PAUL Industrial Gold Standard Alert
 * 
 * A sleek, high-performance alert component for communicating important feedback.
 */
const meta: Meta<typeof Alert> = {
  title: 'Messaging & Feedback/Alert',
  component: Alert,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'A versatile alert component with support for icons, titles, and closing actions.',
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
    showIcon: { control: 'boolean' },
    showTitle: { control: 'boolean' },
    showClose: { control: 'boolean' },
    onClose: { action: 'onClose' },
  },
  args: { 
    type: 'info',
    title: 'Alert title',
    children: 'Pull request #9999 merged after a successful build',
    showIcon: true,
    showTitle: true,
    showClose: true,
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
 * Demonstrating different combinations of elements based on Figma.
 */
export const ElementCombinations: Story = {
  render: (args) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <Alert {...args} showIcon={true} showTitle={true} showClose={true}>
        Full alert with icon, title and close button.
      </Alert>
      <Alert {...args} showIcon={false} showTitle={true} showClose={true}>
        Alert without icon.
      </Alert>
      <Alert {...args} showIcon={true} showTitle={false} showClose={true}>
        Alert without title.
      </Alert>
      <Alert {...args} showIcon={true} showTitle={true} showClose={false}>
        Alert without close button.
      </Alert>
      <Alert {...args} showIcon={false} showTitle={false} showClose={false}>
        Minimal alert with only description.
      </Alert>
    </div>
  ),
};
