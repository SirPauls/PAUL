import type { Meta, StoryObj } from '@storybook/react';
import Loader from '../components/Loader';
import './loader.css';

/**
 * PAUL Industrial Gold Standard Loader
 * 
 * A sleek, high-performance loading indicator for smooth user transitions.
 */
const meta: Meta<typeof Loader> = {
  title: 'Components/Loader',
  component: Loader,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A robust loading indicator component with support for multiple colors and sizes.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'radio',
      options: ['small', 'medium', 'large'],
    },
    color: {
      control: 'select',
      options: ['primary', 'secondary', 'white'],
    },
  },
  args: { 
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
      <Loader {...args} color="primary" />
      <Loader {...args} color="secondary" />
      <div style={{ padding: '8px', backgroundColor: '#333', borderRadius: '4px' }}>
        <Loader {...args} color="white" />
      </div>
    </div>
  ),
};

/**
 * Demonstrating different sizes.
 */
export const Sizes: Story = {
  render: (args) => (
    <div style={{ display: 'flex', gap: '24px', alignItems: 'center' }}>
      <Loader {...args} size="small" />
      <Loader {...args} size="medium" />
      <Loader {...args} size="large" />
    </div>
  ),
};

/**
 * Demonstrating accessibility features.
 */
export const Accessibility: Story = {
  args: {
    'aria-label': 'Fetching data...',
  },
};

/**
 * Demonstrating edge cases.
 */
export const EdgeCases: Story = {
  render: (args) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      <div style={{ width: '50px', border: '1px solid #eee' }}>
        <Loader {...args} />
      </div>
    </div>
  ),
};
