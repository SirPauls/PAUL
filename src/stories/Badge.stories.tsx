import type { Meta, StoryObj } from '@storybook/react';
import Badge from '../components/Badge';
import './badge.css';

/**
 * PAUL Industrial Gold Standard Badge
 * 
 * A sleek, versatile badge component for displaying status or metadata.
 */
const meta: Meta<typeof Badge> = {
  title: 'Components/Badge',
  component: Badge,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A versatile badge component with multiple variants, sizes, and shapes.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'primary', 'success', 'warning', 'error', 'info'],
      description: 'The visual style of the badge',
    },
    size: {
      control: 'radio',
      options: ['small', 'medium', 'large'],
      description: 'The size of the badge',
    },
    shape: {
      control: 'radio',
      options: ['rounded', 'pill', 'square'],
      description: 'The shape of the badge',
    },
  },
  args: { 
    children: 'Badge',
    variant: 'default',
    size: 'medium',
    shape: 'pill',
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
    <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
      <Badge {...args} variant="default">Default</Badge>
      <Badge {...args} variant="primary">Primary</Badge>
      <Badge {...args} variant="success">Success</Badge>
      <Badge {...args} variant="warning">Warning</Badge>
      <Badge {...args} variant="error">Error</Badge>
      <Badge {...args} variant="info">Info</Badge>
    </div>
  ),
};

/**
 * Demonstrating different sizes.
 */
export const Sizes: Story = {
  render: (args) => (
    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
      <Badge {...args} size="small">Small</Badge>
      <Badge {...args} size="medium">Medium</Badge>
      <Badge {...args} size="large">Large</Badge>
    </div>
  ),
};

/**
 * Demonstrating different shapes.
 */
export const Shapes: Story = {
  render: (args) => (
    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
      <Badge {...args} shape="rounded">Rounded</Badge>
      <Badge {...args} shape="pill">Pill</Badge>
      <Badge {...args} shape="square">Square</Badge>
    </div>
  ),
};

/**
 * Demonstrating content variations.
 */
export const ContentVariations: Story = {
  render: (args) => (
    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
      <Badge {...args}>1</Badge>
      <Badge {...args}>New</Badge>
      <Badge {...args}>Hot Fixed</Badge>
      <Badge {...args}>99+</Badge>
    </div>
  ),
};

/**
 * Demonstrating accessibility features.
 */
export const Accessibility: Story = {
  args: {
    children: 'High Priority',
    'aria-label': 'Status: High Priority',
  },
};

/**
 * Demonstrating edge cases.
 */
export const EdgeCases: Story = {
  render: (args) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
      <Badge {...args}>Very long badge content that might wrap or overflow in its container</Badge>
      <Badge {...args}>{''}</Badge>
      <Badge {...args}> </Badge>
    </div>
  ),
};
