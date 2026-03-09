import type { Meta, StoryObj } from '@storybook/react';

import MenuItem from '../components/MenuItem';
import '../components/menuitem.css';

const meta: Meta<typeof MenuItem> = {
  title: 'Navigation/MenuItem',
  component: MenuItem,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    children: 'Menu Item',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithLeadingIcon: Story = {
  args: {
    leadingIcon: (
      <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
      </svg>
    ),
  },
};

export const WithTrailingText: Story = {
  args: {
    trailingText: '⌘C',
  },
};

export const Full: Story = {
  args: {
    leadingIcon: (
      <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
      </svg>
    ),
    trailingText: '⌘C',
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};
