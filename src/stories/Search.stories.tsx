import type { Meta, StoryObj } from '@storybook/react';
import Search from '../components/Search';
import '../components/search.css';

const meta: Meta<typeof Search> = {
  title: 'Forms/Search',
  component: Search,
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
    placeholder: 'Search...',
    size: 'md',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Sizes: Story = {
  render: (args) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', width: '300px' }}>
      <Search {...args} size="sm" />
      <Search {...args} size="md" />
      <Search {...args} size="lg" />
    </div>
  ),
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};
