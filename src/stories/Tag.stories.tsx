import type { Meta, StoryObj } from '@storybook/react';
import Tag from '../components/Tag';
import '../components/tag.css';

const meta: Meta<typeof Tag> = {
  title: 'Data Display/Tag',
  component: Tag,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'primary', 'success', 'warning', 'error', 'info'],
    },
  },
  args: {
    children: 'Tag Label',
    variant: 'default',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Variants: Story = {
  render: (args) => (
    <div style={{ display: 'flex', gap: '12px' }}>
      <Tag {...args} variant="default">Default</Tag>
      <Tag {...args} variant="primary">Primary</Tag>
      <Tag {...args} variant="success">Success</Tag>
      <Tag {...args} variant="warning">Warning</Tag>
      <Tag {...args} variant="error">Error</Tag>
      <Tag {...args} variant="info">Info</Tag>
    </div>
  ),
};
