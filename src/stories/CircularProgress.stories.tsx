import type { Meta, StoryObj } from '@storybook/react';
import CircularProgress from '../components/CircularProgress';
import '../components/circular-progress.css';

/**
 * PAUL Industrial Gold Standard CircularProgress
 * 
 * A precise, visually engaging circular progress indicator for tracking task completion.
 */
const meta: Meta<typeof CircularProgress> = {
  title: 'Indicators & Status/CircularProgress',
  component: CircularProgress,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A versatile circular progress component with support for determinate and indeterminate states, multiple sizes, and colors.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    value: { control: { type: 'range', min: 0, max: 100 } },
    isIndeterminate: { control: 'boolean' },
    size: {
      control: 'radio',
      options: ['small', 'medium', 'large'],
    },
    color: {
      control: 'select',
      options: ['primary', 'secondary', 'success', 'error'],
    },
  },
  args: { 
    value: 75,
    isIndeterminate: false,
    size: 'medium',
    color: 'primary',
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
    <div style={{ display: 'flex', gap: '24px', alignItems: 'center' }}>
      <CircularProgress {...args} color="primary" value={25} />
      <CircularProgress {...args} color="secondary" value={50} />
      <CircularProgress {...args} color="success" value={75} />
      <CircularProgress {...args} color="error" value={100} />
    </div>
  ),
};

/**
 * Demonstrating interactive states.
 */
export const States: Story = {
  render: (args) => (
    <div style={{ display: 'flex', gap: '24px', alignItems: 'center' }}>
      <CircularProgress {...args} isIndeterminate={false} />
      <CircularProgress {...args} isIndeterminate={true} />
    </div>
  ),
};

/**
 * Demonstrating different sizes.
 */
export const Sizes: Story = {
  render: (args) => (
    <div style={{ display: 'flex', gap: '24px', alignItems: 'center' }}>
      <CircularProgress {...args} size="small" />
      <CircularProgress {...args} size="medium" />
      <CircularProgress {...args} size="large" />
    </div>
  ),
};

/**
 * Demonstrating accessibility features.
 */
export const Accessibility: Story = {
  args: {
    value: 40,
    'aria-label': 'File upload progress',
  },
};

/**
 * Demonstrating edge cases.
 */
export const EdgeCases: Story = {
  render: (args) => (
    <div style={{ display: 'flex', gap: '24px', alignItems: 'center' }}>
      <CircularProgress {...args} value={0} />
      <CircularProgress {...args} value={100} />
      <CircularProgress {...args} value={150} />
    </div>
  ),
};
