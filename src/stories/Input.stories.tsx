import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import Input from '../components/Input';
import './input.css';

/**
 * PAUL Industrial Gold Standard Input
 * 
 * A sleek, high-performance input field for precise data entry.
 */
const meta: Meta<typeof Input> = {
  title: 'Components/Input',
  component: Input,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A versatile input component with support for labels, icons, error states, and accessibility.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'select',
      options: ['text', 'password', 'email', 'number', 'tel', 'url'],
    },
    disabled: { control: 'boolean' },
    hasError: { control: 'boolean' },
    placeholder: { control: 'text' },
  },
  args: { 
    label: 'Email Address',
    placeholder: 'Enter your email',
    type: 'email',
    disabled: false,
    hasError: false,
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
      <Input {...args} label="Text Input" type="text" placeholder="John Doe" />
      <Input {...args} label="Password Input" type="password" placeholder="••••••••" />
      <Input {...args} label="Number Input" type="number" placeholder="123" />
    </div>
  ),
};

/**
 * Demonstrating interactive states.
 */
export const States: Story = {
  render: (args) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      <Input {...args} label="Disabled State" disabled value="Pre-filled value" />
      <Input {...args} label="Error State" hasError errorMessage="Invalid email address." />
      <Input {...args} label="Focus State" placeholder="Focus me to see the effect" autoFocus />
    </div>
  ),
};

/**
 * Demonstrating content variations.
 */
export const ContentVariations: Story = {
  render: (args) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      <Input {...args} label="With Helper Text" helperText="We will never share your email." />
      <Input {...args} label="With Left Icon" leftIcon={<span>✉</span>} />
      <Input {...args} label="With Right Icon" rightIcon={<span>✓</span>} />
      <Input {...args} label="With Both Icons" leftIcon={<span>✉</span>} rightIcon={<span>✓</span>} />
    </div>
  ),
};

/**
 * Demonstrating accessibility features.
 */
export const Accessibility: Story = {
  args: {
    label: 'Accessible Input',
    'aria-label': 'Enter your username',
    required: true,
  },
};

/**
 * Demonstrating edge cases.
 */
export const EdgeCases: Story = {
  render: (args) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      <Input {...args} label="Extremely long label that might cause layout issues if not handled properly" />
      <Input {...args} label="" placeholder="No label provided" />
      <Input {...args} label="Large Text Value" value="This is a very long text value that might overflow the input field width if not properly handled by the browser default behavior" />
    </div>
  ),
};
