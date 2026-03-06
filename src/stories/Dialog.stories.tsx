import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import Dialog from '../components/Dialog';
import '../components/dialog.css';

/**
 * PAUL Industrial Gold Standard Dialog
 * 
 * A focused, high-clarity dialog component for critical user decisions.
 */
const meta: Meta<typeof Dialog> = {
  title: 'Containers & Layout/Dialog',
  component: Dialog,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'A robust modal dialog component with header, body, footer actions, and accessibility built-in.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    isOpen: { control: 'boolean' },
    onClose: { action: 'onClose' },
    title: { control: 'text' },
    primaryActionLabel: { control: 'text' },
    secondaryActionLabel: { control: 'text' },
  },
  args: { 
    isOpen: true,
    onClose: fn(),
    title: 'Confirm Action',
    children: 'Are you sure you want to proceed with this operation? This action cannot be undone.',
    primaryActionLabel: 'Confirm',
    secondaryActionLabel: 'Cancel',
    onPrimaryAction: fn(),
    onSecondaryAction: fn(),
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
    <div style={{ height: '400px' }}>
      <Dialog {...args} isOpen={args.isOpen} onClose={args.onClose} title="Information Only" primaryActionLabel="" secondaryActionLabel="Dismiss">
        This is an informational dialog with only a dismiss action.
      </Dialog>
    </div>
  ),
};

/**
 * Demonstrating interactive states.
 */
export const States: Story = {
  render: (args) => (
    <div style={{ height: '400px' }}>
      <Dialog {...args} isOpen={true} onClose={args.onClose} title="Open Dialog">
        The dialog is currently visible.
      </Dialog>
    </div>
  ),
};

/**
 * Demonstrating different content variations.
 */
export const ContentVariations: Story = {
  args: {
    title: 'Terms of Service',
    children: (
      <div>
        <p>Please read our terms carefully before proceeding.</p>
        <div style={{ height: '200px', overflowY: 'auto', border: '1px solid #eee', padding: '12px', marginTop: '12px' }}>
          {'Terms content '.repeat(50)}
        </div>
      </div>
    ),
  },
};

/**
 * Demonstrating accessibility features.
 */
export const Accessibility: Story = {
  args: {
    title: 'Accessible Dialog',
    'aria-label': 'Confirmation for deleting account',
  },
};

/**
 * Demonstrating edge cases.
 */
export const EdgeCases: Story = {
  render: (args) => (
    <div style={{ height: '400px' }}>
      <Dialog {...args} isOpen={args.isOpen} onClose={args.onClose} title="Extremely Long Title That Might Cause Issues With Layout In Some Viewports">
        Content
      </Dialog>
    </div>
  ),
};
