import type { Meta, StoryObj } from '@storybook/react';
import Slider from '../components/Slider';
import '../components/slider.css';

const meta: Meta<typeof Slider> = {
  title: 'Forms/Slider',
  component: Slider,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'radio',
      options: ['sm', 'md', 'lg'],
    },
    disabled: { control: 'boolean' },
  },
  args: {
    size: 'md',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Sizes: Story = {
  render: (args) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', width: '300px' }}>
      <Slider {...args} size="sm" />
      <Slider {...args} size="md" />
      <Slider {...args} size="lg" />
    </div>
  ),
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};
