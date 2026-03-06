import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import SegmentedControl from '../components/SegmentedControl';
import '../components/segmented-control.css';

/**
 * PAUL Industrial Gold Standard SegmentedControl
 * 
 * A sleek, high-precision toggle for selecting between mutually exclusive options.
 */
const meta: Meta<typeof SegmentedControl> = {
  title: 'Forms & Selection Controls/SegmentedControl',
  component: SegmentedControl,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A versatile segmented control component with support for multiple options, sizes, and disabled states.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'radio',
      options: ['small', 'medium', 'large'],
    },
    disabled: { control: 'boolean' },
    onChange: { action: 'changed' },
  },
  args: { 
    options: [
      { value: 'day', label: 'Day' },
      { value: 'week', label: 'Week' },
      { value: 'month', label: 'Month' },
      { value: 'year', label: 'Year', disabled: true },
    ],
    value: 'week',
    size: 'medium',
    disabled: false,
    onChange: fn(),
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
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      <div key="small">
        <SegmentedControl {...args} options={args.options} value={args.value} onChange={args.onChange} size="small" />
      </div>
      <div key="medium">
        <SegmentedControl {...args} options={args.options} value={args.value} onChange={args.onChange} size="medium" />
      </div>
      <div key="large">
        <SegmentedControl {...args} options={args.options} value={args.value} onChange={args.onChange} size="large" />
      </div>
    </div>
  ),
};

/**
 * Demonstrating interactive states.
 */
export const States: Story = {
  render: (args) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      <div key="disabled">
        <SegmentedControl {...args} options={args.options} value={args.value} onChange={args.onChange} disabled />
      </div>
      <div key="active">
        <SegmentedControl {...args} options={args.options} onChange={args.onChange} value="month" />
      </div>
    </div>
  ),
};

/**
 * Demonstrating different content variations.
 */
export const ContentVariations: Story = {
  args: {
    options: [
      { value: 'view', label: '👁 View' },
      { value: 'edit', label: '✎ Edit' },
      { value: 'delete', label: '🗑 Delete' },
    ],
    value: 'view',
  },
};

/**
 * Demonstrating accessibility features.
 */
export const Accessibility: Story = {
  args: {
    'aria-label': 'Select view mode',
  },
};

/**
 * Demonstrating edge cases.
 */
export const EdgeCases: Story = {
  render: (args) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      <div key="empty">
        <SegmentedControl {...args} options={[]} value="" onChange={args.onChange} />
      </div>
      <div key="long">
        <SegmentedControl {...args} value="1" onChange={args.onChange} options={[
          { value: '1', label: 'Very long segmented control option label that might wrap or overflow' }
        ]} />
      </div>
    </div>
  ),
};
