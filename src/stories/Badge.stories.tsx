import type { Meta, StoryObj } from '@storybook/react';

import Badge from '../components/Badge';
import '../components/badge.css';

/**
 * PAUL Industrial Gold Standard Badge
 * 
 * A sleek, high-performance badge component for displaying status or metadata.
 */
const meta: Meta<typeof Badge> = {
  title: 'Indicators & Status/Badge',
  component: Badge,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A versatile badge component with support for leading/trailing elements and multiple sizes.',
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
      options: ['sm', 'md'],
      description: 'The size of the badge',
    },
  },
  args: { 
    children: 'Your chip text',
    variant: 'default',
    size: 'md',
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
 * Demonstrating different sizes from Figma.
 */
export const Sizes: Story = {
  render: (args) => (
    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
      <Badge {...args} size="sm">Small (sm)</Badge>
      <Badge {...args} size="md">Medium (md)</Badge>
    </div>
  ),
};

/**
 * Demonstrating badges with leading and trailing elements.
 */
export const WithElements: Story = {
  render: (args) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
        <Badge 
          {...args} 
          leadingElement={
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="16"/><line x1="8" y1="12" x2="16" y2="12"/></svg>
          }
        >
          Leading Icon
        </Badge>
        <Badge 
          {...args} 
          trailingElement={
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
          }
        >
          Trailing Icon
        </Badge>
        <Badge 
          {...args} 
          leadingElement={
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/></svg>
          }
          trailingElement={
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14"/></svg>
          }
        >
          Both Icons
        </Badge>
      </div>
      <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
        <Badge 
          {...args} 
          size="sm"
          leadingElement={
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="16"/><line x1="8" y1="12" x2="16" y2="12"/></svg>
          }
        >
          Small Leading
        </Badge>
        <Badge 
          {...args} 
          size="sm"
          trailingElement={
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
          }
        >
          Small Trailing
        </Badge>
      </div>
    </div>
  ),
};

/**
 * Demonstrating icons only.
 */
export const IconsOnly: Story = {
  render: (args) => (
    <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
      <Badge 
        {...args} 
        leadingElement={<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/></svg>}
      />
      <Badge 
        {...args} 
        size="sm"
        leadingElement={<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/></svg>}
      />
    </div>
  ),
};
