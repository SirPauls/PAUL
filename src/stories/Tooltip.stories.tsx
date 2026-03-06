import type { Meta, StoryObj } from '@storybook/react';
import Tooltip from '../components/Tooltip';
import Button from '../components/Button'; // Assuming Button exists based on file list
import '../components/tooltip.css';

/**
 * PAUL Industrial Gold Standard Tooltip
 * 
 * A sleek, informative tooltip for providing contextual help.
 */
const meta: Meta<typeof Tooltip> = {
  title: 'Messaging & Feedback/Tooltip',
  component: Tooltip,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A tooltip component that displays additional information on hover or focus.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    position: {
      control: 'select',
      options: ['top', 'bottom', 'left', 'right'],
    },
    delay: { control: 'number' },
    content: { control: 'text' },
  },
  args: { 
    content: 'This is a tooltip',
    position: 'top',
    delay: 200,
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Default story showing the component in its basic state.
 */
export const Default: Story = {
  render: (args) => (
    <Tooltip {...args} content={args.content || 'Default Tooltip'}>
      <Button label="Hover me" />
    </Tooltip>
  ),
};

/**
 * Demonstrating positioning variations.
 */
export const Positions: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '20px', alignItems: 'center', justifyContent: 'center', padding: '50px' }}>
      <Tooltip content="Tooltip on Top" position="top">
        <Button label="Top" />
      </Tooltip>
      <Tooltip content="Tooltip on Bottom" position="bottom">
        <Button label="Bottom" />
      </Tooltip>
      <Tooltip content="Tooltip on Left" position="left">
        <Button label="Left" />
      </Tooltip>
      <Tooltip content="Tooltip on Right" position="right">
        <Button label="Right" />
      </Tooltip>
    </div>
  ),
};

/**
 * Demonstrating different delays.
 */
export const Delays: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
      <Tooltip content="Instant tooltip" delay={0}>
        <Button label="Instant (0ms)" />
      </Tooltip>
      <Tooltip content="Standard tooltip" delay={200}>
        <Button label="Standard (200ms)" />
      </Tooltip>
      <Tooltip content="Slow tooltip" delay={1000}>
        <Button label="Slow (1000ms)" />
      </Tooltip>
    </div>
  ),
};

/**
 * Demonstrating complex content.
 */
export const RichContent: Story = {
  render: (args) => (
    <Tooltip 
      {...args} 
      content={
        <div style={{ textAlign: 'center' }}>
          <strong>Bold Text</strong><br/>
          <span>Multiple lines supported</span>
        </div>
      }
    >
      <Button label="Rich Content" />
    </Tooltip>
  ),
};
