import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import Chip from '../components/Chip';
import '../components/chip.css';

/**
 * PAUL Industrial Gold Standard Chip
 * 
 * A sleek, interactive chip component for tags, filters, and small bits of information.
 */
const meta: Meta<typeof Chip> = {
  title: 'Forms & Selection Controls/Chip',
  component: Chip,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A versatile chip component with support for multiple colors, variants, icons, and interactive actions.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'radio',
      options: ['filled', 'outlined'],
      description: 'The visual style of the chip',
    },
    color: {
      control: 'select',
      options: ['default', 'primary', 'success', 'warning', 'error'],
      description: 'The color scheme of the chip',
    },
    onClick: { action: 'clicked' },
    onDelete: { action: 'deleted' },
    disabled: { control: 'boolean' },
  },
  args: { 
    label: 'Chip',
    variant: 'filled',
    color: 'default',
    disabled: false,
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
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <div style={{ display: 'flex', gap: '12px' }}>
        <Chip {...args} variant="filled" label="Filled Default" />
        <Chip {...args} variant="filled" color="primary" label="Filled Primary" />
        <Chip {...args} variant="filled" color="success" label="Filled Success" />
      </div>
      <div style={{ display: 'flex', gap: '12px' }}>
        <Chip {...args} variant="outlined" label="Outlined Default" />
        <Chip {...args} variant="outlined" color="primary" label="Outlined Primary" />
        <Chip {...args} variant="outlined" color="success" label="Outlined Success" />
      </div>
    </div>
  ),
};

/**
 * Demonstrating interactive states.
 */
export const States: Story = {
  render: (args) => (
    <div style={{ display: 'flex', gap: '12px' }}>
      <Chip {...args} label="Clickable" onClick={fn()} />
      <Chip {...args} label="Deletable" onDelete={fn()} />
      <Chip {...args} label="Disabled" disabled onClick={fn()} onDelete={fn()} />
    </div>
  ),
};

/**
 * Demonstrating content variations.
 */
export const ContentVariations: Story = {
  render: (args) => (
    <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
      <Chip {...args} icon={<span>★</span>} label="With Icon" />
      <Chip {...args} label="Short" />
      <Chip {...args} label="Very long chip label that might wrap" />
    </div>
  ),
};

/**
 * Demonstrating accessibility features.
 */
export const Accessibility: Story = {
  args: {
    label: 'Accessible Chip',
    'aria-label': 'Tag: Accessible Chip',
    onClick: fn(),
  },
};

/**
 * Demonstrating edge cases.
 */
export const EdgeCases: Story = {
  render: (args) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
      <Chip {...args} label="" />
      <Chip {...args} label=" " />
    </div>
  ),
};
