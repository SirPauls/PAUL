import type { Meta, StoryObj } from '@storybook/react';
import Placeholder from '../components/Placeholder';
import '../components/placeholder.css';

/**
 * PAUL Industrial Gold Standard Placeholder
 * 
 * A sleek, versatile placeholder component for smooth skeleton loading experiences.
 */
const meta: Meta<typeof Placeholder> = {
  title: 'Indicators & Status/Placeholder',
  component: Placeholder,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A versatile placeholder component for building skeleton loaders with support for multiple shapes and shimmer animations.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'radio',
      options: ['text', 'rect', 'circle'],
    },
    shimmer: { control: 'boolean' },
    width: { control: 'text' },
    height: { control: 'text' },
  },
  args: { 
    variant: 'rect',
    shimmer: true,
    width: '100px',
    height: '100px',
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
      <Placeholder {...args} variant="rect" width={100} height={100} />
      <Placeholder {...args} variant="circle" width={100} height={100} />
      <div style={{ width: '200px' }}>
        <Placeholder {...args} variant="text" width="100%" height="1rem" />
        <Placeholder {...args} variant="text" width="80%" height="1rem" />
        <Placeholder {...args} variant="text" width="60%" height="1rem" />
      </div>
    </div>
  ),
};

/**
 * Demonstrating interactive states.
 */
export const States: Story = {
  render: (args) => (
    <div style={{ display: 'flex', gap: '24px', alignItems: 'center' }}>
      <Placeholder {...args} shimmer={false} />
      <Placeholder {...args} shimmer={true} />
    </div>
  ),
};

/**
 * Demonstrating different sizes.
 */
export const Sizes: Story = {
  render: (args) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      <Placeholder {...args} width="50px" height="50px" />
      <Placeholder {...args} width="150px" height="150px" />
      <Placeholder {...args} width="300px" height="20px" />
    </div>
  ),
};

/**
 * Demonstrating accessibility features.
 */
export const Accessibility: Story = {
  args: {
    'aria-label': 'Loading user profile image...',
  },
};

/**
 * Demonstrating edge cases.
 */
export const EdgeCases: Story = {
  render: (args) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      <Placeholder {...args} width="100%" height="2px" />
      <Placeholder {...args} width="2px" height="100px" />
    </div>
  ),
};
