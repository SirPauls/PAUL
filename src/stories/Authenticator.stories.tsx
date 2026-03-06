import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import Authenticator from '../components/Authenticator';
import '../components/authenticator.css';

/**
 * PAUL Industrial Gold Standard Authenticator
 * 
 * A sleek, high-performance authentication interface for secure user entry.
 */
const meta: Meta<typeof Authenticator> = {
  title: 'Forms & Selection Controls/Authenticator',
  component: Authenticator,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A comprehensive authentication component with login and registration modes, built-in form validation, and loading states.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    initialMode: {
      control: 'radio',
      options: ['login', 'register'],
      description: 'The initial mode of the authenticator',
    },
    isLoading: { control: 'boolean' },
    errorMessage: { control: 'text' },
  },
  args: { 
    title: 'Welcome back',
    onLogin: fn(),
    onRegister: fn(),
    initialMode: 'login',
    isLoading: false,
    errorMessage: '',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Default story showing the component in its basic state.
 */
export const Default: Story = {};

/**
 * Demonstrating login and registration modes.
 */
export const Modes: Story = {
  render: (args) => (
    <div style={{ display: 'flex', gap: '32px' }}>
      <Authenticator {...args} initialMode="login" title="Sign In" />
      <Authenticator {...args} initialMode="register" title="Create Account" />
    </div>
  ),
};

/**
 * Demonstrating interactive states.
 */
export const States: Story = {
  render: (args) => (
    <div style={{ display: 'flex', gap: '32px' }}>
      <Authenticator {...args} isLoading title="Loading State" />
      <Authenticator {...args} errorMessage="Invalid email or password. Please try again." title="Error State" />
    </div>
  ),
};

/**
 * Demonstrating content variations.
 */
export const ContentVariations: Story = {
  render: (args) => (
    <div style={{ display: 'flex', gap: '32px' }}>
      <Authenticator {...args} title="Log into your Workspace" />
      <Authenticator {...args} title="Access the Design System" />
    </div>
  ),
};

/**
 * Demonstrating accessibility features.
 */
export const Accessibility: Story = {
  args: {
    title: 'Accessible Login',
    'aria-label': 'Authentication form',
  },
};

/**
 * Demonstrating edge cases.
 */
export const EdgeCases: Story = {
  render: (args) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
      <div style={{ width: '300px' }}>
        <Authenticator {...args} title="Authenticator in a narrow container" />
      </div>
    </div>
  ),
};
