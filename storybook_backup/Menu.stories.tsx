import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import Menu, { type MenuItem } from '../components/Menu';
import Button from '../components/Button';
import '../components/menu.css';

/**
 * PAUL Industrial Gold Standard Menu
 * 
 * A sleek, high-clarity menu component for focused user actions.
 */
const meta: Meta<typeof Menu> = {
  title: 'Navigation/Menu',
  component: Menu,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A versatile menu component with support for custom triggers, icons, dividers, and accessibility.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    align: {
      control: 'radio',
      options: ['left', 'right'],
    },
  },
  args: { 
    trigger: <Button label="Open Menu" />,
    items: [
      { id: '1', label: 'Profile', icon: <span>👤</span>, onClick: fn() },
      { id: '2', label: 'Settings', icon: <span>⚙</span>, onClick: fn() },
      { id: '3', label: 'Divider', divider: true },
      { id: '4', label: 'Logout', icon: <span>🚪</span>, onClick: fn() },
    ],
    align: 'left',
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
    <div style={{ display: 'flex', gap: '32px', minHeight: '250px' }}>
      <Menu {...args} items={args.items} trigger={<Button label="Align Left" />} align="left" />
      <Menu {...args} items={args.items} trigger={<Button label="Align Right" />} align="right" />
    </div>
  ),
};

/**
 * Demonstrating interactive states.
 */
export const States: Story = {
  render: (args) => (
    <div style={{ display: 'flex', gap: '32px', minHeight: '250px' }}>
      <Menu {...args} items={args.items.map((item: MenuItem) => ({ ...item, disabled: true }))} trigger={<Button label="Disabled Menu Items" />} />
    </div>
  ),
};

/**
 * Demonstrating content variations.
 */
export const ContentVariations: Story = {
  args: {
    trigger: <span style={{ cursor: 'pointer', fontSize: '1.5rem' }}>⋮</span>,
    items: [
      { id: '1', label: 'Share', icon: <span>🔗</span> },
      { id: '2', label: 'Edit', icon: <span>✎</span> },
      { id: '3', label: 'Delete', icon: <span>🗑</span>, color: 'red' },
    ],
  },
};

/**
 * Demonstrating accessibility features.
 */
export const Accessibility: Story = {
  args: {
    trigger: <Button label="Accessible Menu" />,
    'aria-label': 'User account actions',
  },
};

/**
 * Demonstrating edge cases.
 */
export const EdgeCases: Story = {
  render: (args) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', minHeight: '250px' }}>
      <Menu {...args} items={[]} trigger={<Button label="Empty Menu" />} />
      <Menu {...args} items={[
        { id: '1', label: 'Very long menu item label that might wrap or overflow' }
      ]} trigger={<Button label="Long Labels" />} />
    </div>
  ),
};
