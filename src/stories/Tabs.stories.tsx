import type { Meta, StoryObj } from '@storybook/react';
import Tabs from '../components/Tabs';
import '../components/tabs.css';

const meta: Meta<typeof Tabs> = {
  title: 'Navigation/Tabs',
  component: Tabs,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  args: {
    items: [
      { id: '1', label: 'Tab 1', content: 'Content for Tab 1' },
      { id: '2', label: 'Tab 2', content: 'Content for Tab 2' },
      { id: '3', label: 'Tab 3', content: 'Content for Tab 3' },
    ],
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
