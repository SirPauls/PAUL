import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import Drawer from '../components/Drawer';
import './drawer.css';

/**
 * PAUL Industrial Gold Standard Drawer
 * 
 * A sleek, high-utility side drawer for additional context and navigation.
 */
const meta: Meta<typeof Drawer> = {
  title: 'Components/Drawer',
  component: Drawer,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'A robust side drawer component with custom placements, titles, and interactive states.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    isOpen: { control: 'boolean' },
    onClose: { action: 'onClose' },
    placement: {
      control: 'radio',
      options: ['left', 'right'],
    },
    title: { control: 'text' },
  },
  args: { 
    isOpen: true,
    onClose: fn(),
    placement: 'right',
    title: 'Menu',
    children: 'This is the drawer content. It can contain navigation links, filters, or settings.',
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
      <Drawer {...args} isOpen={args.isOpen} onClose={args.onClose} placement="left" title="Left Placement">Content</Drawer>
      <Drawer {...args} isOpen={args.isOpen} onClose={args.onClose} placement="right" title="Right Placement">Content</Drawer>
    </div>
  ),
};

/**
 * Demonstrating interactive states.
 */
export const States: Story = {
  render: (args) => (
    <div style={{ height: '400px' }}>
      <Drawer {...args} isOpen={false} onClose={args.onClose} title="Closed Drawer">Content</Drawer>
      <Drawer {...args} isOpen={true} onClose={args.onClose} title="Open Drawer">Content</Drawer>
    </div>
  ),
};

/**
 * Demonstrating different content variations.
 */
export const ContentVariations: Story = {
  args: {
    title: 'Navigation',
    children: (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <div style={{ fontWeight: 600 }}>Overview</div>
        <div style={{ paddingLeft: '12px' }}>Analytics</div>
        <div style={{ paddingLeft: '12px' }}>Reports</div>
        <div style={{ fontWeight: 600, marginTop: '8px' }}>Management</div>
        <div style={{ paddingLeft: '12px' }}>Users</div>
        <div style={{ paddingLeft: '12px' }}>Teams</div>
      </div>
    ),
  },
};

/**
 * Demonstrating accessibility features.
 */
export const Accessibility: Story = {
  args: {
    title: 'Accessible Drawer',
    'aria-label': 'User settings drawer',
  },
};

/**
 * Demonstrating edge cases.
 */
export const EdgeCases: Story = {
  render: (args) => (
    <div style={{ height: '400px' }}>
      <Drawer {...args} isOpen={args.isOpen} onClose={args.onClose} title="Very Long Drawer Title That Might Need To Wrap Or Ellipsis">
        {'Content '.repeat(100)}
      </Drawer>
    </div>
  ),
};
