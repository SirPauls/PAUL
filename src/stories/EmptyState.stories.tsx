import type { Meta, StoryObj } from '@storybook/react';

import EmptyState from '../components/EmptyState';
import Button from '../components/Button';
import '../components/emptystate.css';
import '../components/button.css';

const meta: Meta<typeof EmptyState> = {
  title: 'Layout/EmptyState',
  component: EmptyState,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    title: 'No results found',
    description: 'Try adjusting your search or filter to find what you are looking for.',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithIcon: Story = {
  args: {
    icon: (
      <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
      </svg>
    ),
  },
};

export const WithAction: Story = {
  args: {
    action: <Button variant="primary" label="New Item" />,
  },
};

export const Error404: Story = {
  args: {
    title: '404 - Page Not Found',
    description: 'Sorry, the page you are looking for could not be found.',
    icon: (
      <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M18.364 5.636a9 9 0 11-12.728 0M12 9v4m0 4h.01"></path>
      </svg>
    ),
    action: <Button variant="primary" label="Go to Homepage" />,
  },
};
