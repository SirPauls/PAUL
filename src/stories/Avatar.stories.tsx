import type { Meta, StoryObj } from '@storybook/react';
import Avatar from '../components/Avatar';
import '../components/avatar.css';

/**
 * PAUL Industrial Gold Standard Avatar
 * 
 * A clean, expressive avatar component for user identification.
 */
const meta: Meta<typeof Avatar> = {
  title: 'Content Display/Avatar',
  component: Avatar,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A versatile avatar component with image support, initials support, and multiple sizes and shapes.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['small', 'medium', 'large', 'xlarge'],
      description: 'The size of the avatar',
    },
    shape: {
      control: 'radio',
      options: ['circle', 'square'],
      description: 'The shape of the avatar',
    },
    isLoading: { control: 'boolean' },
    src: { control: 'text' },
  },
  args: { 
    name: 'Sir Paul',
    size: 'medium',
    shape: 'circle',
    isLoading: false,
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
      <Avatar {...args} name="Initial Avatar" />
      <Avatar {...args} src="https://avatars.githubusercontent.com/u/108528654?v=4" name="Image Avatar" />
    </div>
  ),
};

/**
 * Demonstrating different sizes.
 */
export const Sizes: Story = {
  render: (args) => (
    <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
      <Avatar {...args} name="Small" size="small" />
      <Avatar {...args} name="Medium" size="medium" />
      <Avatar {...args} name="Large" size="large" />
      <Avatar {...args} name="XLarge" size="xlarge" />
    </div>
  ),
};

/**
 * Demonstrating different shapes.
 */
export const Shapes: Story = {
  render: (args) => (
    <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
      <Avatar {...args} name="Circle" shape="circle" />
      <Avatar {...args} name="Square" shape="square" />
    </div>
  ),
};

/**
 * Demonstrating interactive states.
 */
export const States: Story = {
  render: (args) => (
    <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
      <Avatar {...args} name="Loading" isLoading />
      <Avatar {...args} name="Loaded" />
    </div>
  ),
};

/**
 * Demonstrating content variations.
 */
export const ContentVariations: Story = {
  render: (args) => (
    <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
      <Avatar {...args} name="A" />
      <Avatar {...args} name="Longer Name Example" />
    </div>
  ),
};

/**
 * Demonstrating accessibility features.
 */
export const Accessibility: Story = {
  args: {
    name: 'Accessible Avatar',
    'aria-label': 'User profile image for Accessible Avatar',
  },
};

/**
 * Demonstrating edge cases.
 */
export const EdgeCases: Story = {
  render: (args) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      <Avatar {...args} name="" />
      <Avatar {...args} name=" " />
    </div>
  ),
};
