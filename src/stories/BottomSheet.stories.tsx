import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import BottomSheet from '../components/BottomSheet';
import './bottom-sheet.css';

/**
 * PAUL Industrial Gold Standard BottomSheet
 * 
 * A sleek, modern bottom sheet component for mobile-first user interactions.
 */
const meta: Meta<typeof BottomSheet> = {
  title: 'Components/BottomSheet',
  component: BottomSheet,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'A robust bottom sheet component with custom titles, multiple interactive states, and responsive behavior.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    isOpen: { control: 'boolean' },
    onClose: { action: 'onClose' },
    title: { control: 'text' },
  },
  args: { 
    isOpen: true,
    onClose: fn(),
    title: 'Sheet Title',
    children: 'This is the main content of the bottom sheet. It can contain any valid React node.',
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
    <div style={{ padding: '24px' }}>
      <BottomSheet {...args} isOpen={args.isOpen} onClose={args.onClose}>
        This sheet includes a title and long body content.
      </BottomSheet>
      <BottomSheet {...args} isOpen={args.isOpen} onClose={args.onClose} title="">
        This sheet has no title, focusing purely on content.
      </BottomSheet>
    </div>
  ),
};

/**
 * Demonstrating interactive states.
 */
export const States: Story = {
  render: (args) => (
    <div style={{ padding: '24px' }}>
      <BottomSheet {...args} isOpen={false} onClose={args.onClose} title="Closed Sheet">Content</BottomSheet>
      <BottomSheet {...args} isOpen={true} onClose={args.onClose} title="Open Sheet">Content</BottomSheet>
    </div>
  ),
};

/**
 * Demonstrating different content variations.
 */
export const ContentVariations: Story = {
  args: {
    title: 'Actions',
    children: (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        <div style={{ padding: '12px', borderBottom: '1px solid #eee', cursor: 'pointer' }}>Edit Profile</div>
        <div style={{ padding: '12px', borderBottom: '1px solid #eee', cursor: 'pointer' }}>Settings</div>
        <div style={{ padding: '12px', color: 'red', cursor: 'pointer' }}>Delete Account</div>
      </div>
    ),
  },
};

/**
 * Demonstrating accessibility features.
 */
export const Accessibility: Story = {
  args: {
    title: 'Accessible Sheet',
    'aria-label': 'User profile actions sheet',
  },
};

/**
 * Demonstrating edge cases.
 */
export const EdgeCases: Story = {
  render: (args) => (
    <div style={{ padding: '24px' }}>
      <BottomSheet {...args} isOpen={args.isOpen} onClose={args.onClose} title="Empty Body">{''}</BottomSheet>
      <BottomSheet {...args} isOpen={args.isOpen} onClose={args.onClose} title="Very Long Content">{'Lorem '.repeat(100)}</BottomSheet>
    </div>
  ),
};
