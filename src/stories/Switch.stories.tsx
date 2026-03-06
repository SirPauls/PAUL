import type { Meta, StoryObj } from '@storybook/react';
import Switch from '../components/Switch';
import '../components/switch.css';

/**
 * PAUL Industrial Gold Standard Switch
 * 
 * A high-precision, interactive toggle for instantaneous state changes.
 */
const meta: Meta<typeof Switch> = {
  title: 'Forms & Selection Controls/Switch',
  component: Switch,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A versatile switch component with support for labels, error states, and accessibility.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    checked: { control: 'boolean' },
    disabled: { control: 'boolean' },
    hasError: { control: 'boolean' },
    label: { control: 'text' },
  },
  args: { 
    label: 'Enable notifications',
    checked: false,
    disabled: false,
    hasError: false,
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
      <Switch {...args} label="Off State" checked={false} />
      <Switch {...args} label="On State" checked={true} />
    </div>
  ),
};

/**
 * Demonstrating interactive states.
 */
export const States: Story = {
  render: (args) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <Switch {...args} label="Disabled Off" disabled checked={false} />
      <Switch {...args} label="Disabled On" disabled checked={true} />
      <Switch {...args} label="Error State" hasError />
    </div>
  ),
};

/**
 * Demonstrating content variations.
 */
export const ContentVariations: Story = {
  render: (args) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <Switch {...args} label="Short" />
      <div style={{ width: '200px' }}>
        <Switch {...args} label="Very long switch label that might wrap in its container" />
      </div>
    </div>
  ),
};

/**
 * Demonstrating accessibility features.
 */
export const Accessibility: Story = {
  args: {
    label: 'Accessible Switch',
    'aria-label': 'Toggle dark mode',
  },
};

/**
 * Demonstrating edge cases.
 */
export const EdgeCases: Story = {
  render: (args) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <Switch {...args} label="" />
      <Switch {...args} label=" " />
    </div>
  ),
};
