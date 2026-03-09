import type { Meta, StoryObj } from '@storybook/react';

import Sidebar from '../components/Sidebar';
import Navigation from '../components/Navigation';
import '../components/sidebar.css';
import '../components/navigation.css';

const meta: Meta<typeof Sidebar> = {
  title: 'Layout/Sidebar',
  component: Sidebar,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {
    position: {
      control: 'radio',
      options: ['left', 'right'],
    },
  },
  args: {
    position: 'left',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

const navItems = [
  { id: '1', label: 'Dashboard', href: '#', active: true },
  { id: '2', label: 'Team', href: '#' },
  { id: '3', label: 'Projects', href: '#' },
  { id: '4', label: 'Calendar', href: '#' },
];

export const Default: Story = {
  render: (args) => (
    <div style={{ display: 'flex', height: '100vh' }}>
      <Sidebar {...args}>
        <h2>PAUL</h2>
        <Navigation items={navItems} orientation="vertical" />
      </Sidebar>
      <main style={{ flex: 1, padding: '24px' }}>
        <h1>Main Content</h1>
      </main>
    </div>
  ),
};

export const Right: Story = {
  render: (args) => (
    <div style={{ display: 'flex', height: '100vh' }}>
      <main style={{ flex: 1, padding: '24px' }}>
        <h1>Main Content</h1>
      </main>
      <Sidebar {...args}>
        <h2>PAUL</h2>
        <Navigation items={navItems} orientation="vertical" />
      </Sidebar>
    </div>
  ),
  args: {
    position: 'right',
  },
};
