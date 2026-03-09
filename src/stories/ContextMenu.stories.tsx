import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import ContextMenu from '../components/ContextMenu';
import '../components/contextmenu.css';

const meta: Meta<typeof ContextMenu> = {
  title: 'Overlays/ContextMenu',
  component: ContextMenu,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    items: [
      { label: 'Copy', onClick: () => alert('Copied!') },
      { label: 'Paste', onClick: () => alert('Pasted!') },
      { label: 'Cut', onClick: () => alert('Cut!'), disabled: true },
    ],
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => (
    <ContextMenu {...args}>
      <div style={{ padding: '40px', border: '2px dashed #ccc', textAlign: 'center' }}>
        Right-click here
      </div>
    </ContextMenu>
  ),
};
