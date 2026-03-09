import type { Meta, StoryObj } from '@storybook/react';
import Avatar from '../components/Avatar';
import '../components/avatar.css';

/**
 * PAUL Industrial Gold Standard Avatar
 * 
 * A sleek, high-performance avatar component for user identification.
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
      options: ['xs', 'sm', 'md', 'lg', 'xl', '2xl'],
      description: 'The size of the avatar',
    },
    shape: {
      control: 'radio',
      options: ['circle', 'square'],
      description: 'The shape of the avatar',
    },
    status: {
      control: 'select',
      options: ['online', 'offline', 'away', 'busy'],
      description: 'The status of the user',
    },
    src: { control: 'text' },
  },
  args: { 
    name: 'Sir Paul',
    size: 'md',
    shape: 'circle',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Default story showing the component in its basic state.
 */
export const Default: Story = {};

/**
 * Demonstrating all sizes from Figma.
 */
export const Sizes: Story = {
  render: (args) => (
    <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
      <Avatar {...args} name="XS" size="xs" />
      <Avatar {...args} name="SM" size="sm" />
      <Avatar {...args} name="MD" size="md" />
      <Avatar {...args} name="LG" size="lg" />
      <Avatar {...args} name="XL" size="xl" />
      <Avatar {...args} name="2XL" size="2xl" />
    </div>
  ),
};

/**
 * Demonstrating image avatars.
 */
export const ImageAvatars: Story = {
  render: (args) => (
    <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
      <Avatar {...args} src="https://avatars.githubusercontent.com/u/108528654?v=4" name="User 1" size="lg" />
      <Avatar {...args} src="https://avatars.githubusercontent.com/u/1?v=4" name="User 2" size="lg" />
    </div>
  ),
};

/**
 * Demonstrating status indicators.
 */
export const Status: Story = {
  render: (args) => (
    <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
      <Avatar {...args} name="Online" status="online" size="lg" />
      <Avatar {...args} name="Away" status="away" size="lg" />
      <Avatar {...args} name="Busy" status="busy" size="lg" />
      <Avatar {...args} name="Offline" status="offline" size="lg" />
    </div>
  ),
};

/**
 * Demonstrating different shapes.
 */
export const Shapes: Story = {
  render: (args) => (
    <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
      <Avatar {...args} name="Circle" shape="circle" size="lg" />
      <Avatar {...args} name="Square" shape="square" size="lg" />
    </div>
  ),
};
