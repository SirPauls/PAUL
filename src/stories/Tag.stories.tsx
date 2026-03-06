import type { Meta, StoryObj } from '@storybook/react';
import Tag from '../components/Tag';
import './tag.css';

/**
 * PAUL Industrial Gold Standard Tag
 * 
 * A compact, non-interactive tag component for categorization and metadata.
 */
const meta: Meta<typeof Tag> = {
  title: 'Components/Tag',
  component: Tag,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A versatile tag component with support for multiple colors and sizes.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    color: {
      control: 'select',
      options: ['default', 'primary', 'success', 'warning', 'error', 'info'],
    },
    size: {
      control: 'radio',
      options: ['small', 'medium'],
    },
  },
  args: { 
    label: 'New',
    color: 'default',
    size: 'medium',
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
    <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
      <Tag {...args} color="default" label="Default" />
      <Tag {...args} color="primary" label="Primary" />
      <Tag {...args} color="success" label="Success" />
      <Tag {...args} color="warning" label="Warning" />
      <Tag {...args} color="error" label="Error" />
      <Tag {...args} color="info" label="Info" />
    </div>
  ),
};

/**
 * Demonstrating different sizes.
 */
export const Sizes: Story = {
  render: (args) => (
    <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
      <Tag {...args} size="small" label="Small" />
      <Tag {...args} size="medium" label="Medium" />
    </div>
  ),
};

/**
 * Demonstrating content variations.
 */
export const ContentVariations: Story = {
  render: (args) => (
    <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
      <Tag {...args} label="A" />
      <Tag {...args} label="Version 2.0" />
      <Tag {...args} label="Experimental Feature" />
    </div>
  ),
};

/**
 * Demonstrating accessibility features.
 */
export const Accessibility: Story = {
  args: {
    label: 'Breaking Change',
    'aria-label': 'Tag: Breaking Change',
  },
};

/**
 * Demonstrating edge cases.
 */
export const EdgeCases: Story = {
  render: (args) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
      <Tag {...args} label="" />
      <Tag {...args} label=" " />
      <div style={{ width: '50px' }}>
        <Tag {...args} label="Very long tag label that might overflow its container" />
      </div>
    </div>
  ),
};
