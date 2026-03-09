import type { Meta, StoryObj } from '@storybook/react';
import ProgressBar from '../components/ProgressBar';
import '../components/progressbar.css';

const meta: Meta<typeof ProgressBar> = {
  title: 'Indicators & Status/ProgressBar',
  component: ProgressBar,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    value: { control: { type: 'range', min: 0, max: 100 } },
    size: {
      control: 'radio',
      options: ['sm', 'md', 'lg'],
    },
  },
  args: {
    value: 50,
    size: 'md',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Sizes: Story = {
  render: (args) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <ProgressBar {...args} size="sm" />
      <ProgressBar {...args} size="md" />
      <ProgressBar {...args} size="lg" />
    </div>
  ),
};
