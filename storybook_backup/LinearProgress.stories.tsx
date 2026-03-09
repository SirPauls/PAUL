import type { Meta, StoryObj } from '@storybook/react';
import LinearProgress from '../components/LinearProgress';
import '../components/linear-progress.css';

/**
 * PAUL Industrial Gold Standard LinearProgress
 * 
 * A sleek, precise linear progress indicator for tracking task progression.
 */
const meta: Meta<typeof LinearProgress> = {
  title: 'Indicators & Status/LinearProgress',
  component: LinearProgress,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'A versatile linear progress component with support for determinate and indeterminate states, multiple colors, and accessibility.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    value: { control: { type: 'range', min: 0, max: 100 } },
    isIndeterminate: { control: 'boolean' },
    color: {
      control: 'select',
      options: ['primary', 'secondary', 'success', 'error'],
    },
  },
  args: { 
    value: 75,
    isIndeterminate: false,
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
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      <LinearProgress {...args} color="primary" value={25} />
      <LinearProgress {...args} color="secondary" value={50} />
      <LinearProgress {...args} color="success" value={75} />
      <LinearProgress {...args} color="error" value={100} />
    </div>
  ),
};

/**
 * Demonstrating interactive states.
 */
export const States: Story = {
  render: (args) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      <LinearProgress {...args} isIndeterminate={false} />
      <LinearProgress {...args} isIndeterminate={true} />
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
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      <LinearProgress {...args} value={0} />
      <LinearProgress {...args} value={100} />
      <LinearProgress {...args} value={150} />
    </div>
  ),
};
