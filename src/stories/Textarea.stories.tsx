import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import Textarea from '../components/Textarea';
import '../components/textarea.css';

/**
 * PAUL Industrial Gold Standard Textarea
 * 
 * A sleek, high-performance textarea for multi-line text entry.
 */
const meta: Meta<typeof Textarea> = {
  title: 'Components/Textarea',
  component: Textarea,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A versatile textarea component with support for labels, error states, and accessibility.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    resize: {
      control: 'select',
      options: ['none', 'vertical', 'horizontal', 'both'],
    },
    disabled: { control: 'boolean' },
    hasError: { control: 'boolean' },
    placeholder: { control: 'text' },
    rows: { control: 'number' },
  },
  args: { 
    label: 'Description',
    placeholder: 'Enter your description here...',
    disabled: false,
    hasError: false,
    resize: 'vertical',
    rows: 4,
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
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', width: '400px' }}>
      <Textarea {...args} label="Short Description" rows={2} placeholder="Brief summary" />
      <Textarea {...args} label="Long Description" rows={6} placeholder="Detailed explanation" />
      <Textarea {...args} label="No Resize" resize="none" placeholder="Fixed size" />
    </div>
  ),
};

/**
 * Demonstrating interactive states.
 */
export const States: Story = {
  render: (args) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', width: '400px' }}>
      <Textarea {...args} label="Disabled State" disabled value="This text cannot be edited." />
      <Textarea {...args} label="Error State" hasError errorMessage="Description is required." />
      <Textarea {...args} label="Focus State" placeholder="Focus me to see the effect" autoFocus />
    </div>
  ),
};

/**
 * Demonstrating content variations.
 */
export const ContentVariations: Story = {
  render: (args) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', width: '400px' }}>
      <Textarea {...args} label="With Helper Text" helperText="Maximum 500 characters." />
      <Textarea {...args} label="With Placeholder" placeholder="Type something amazing..." />
    </div>
  ),
};

/**
 * Demonstrating accessibility features.
 */
export const Accessibility: Story = {
  args: {
    label: 'Accessible Textarea',
    'aria-label': 'Enter your feedback',
    required: true,
  },
};
