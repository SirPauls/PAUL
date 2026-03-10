import type { Meta, StoryObj } from '@storybook/react';
import Navigation from '../components/Navigation';
import '../components/navigation.css';

const meta: Meta<typeof Navigation> = {
  title: 'Navigation/Navigation',
  component: Navigation,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    orientation: {
      control: 'radio',
      options: ['horizontal', 'vertical'],
    },
  },
  args: {
    items: [
      { id: '1', label: 'Home', href: '#', active: true },
      { id: '2', label: 'About', href: '#' },
      { id: '3', label: 'Products', href: '#' },
      { id: '4', label: 'Contact', href: '#' },
    ],
    orientation: 'horizontal',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Horizontal: Story = {
  args: {
    items: [
      { id: '1', label: 'Home', href: '#', active: true },
      { id: '2', label: 'About', href: '#' },
      { id: '3', label: 'Products', href: '#' },
      { id: '4', label: 'Contact', href: '#' },
    ],
  },
};

export const Vertical: Story = {
  args: {
    orientation: 'vertical',
  },
};
