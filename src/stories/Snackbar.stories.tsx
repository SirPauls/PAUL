import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import Snackbar, { type SnackbarProps } from '../components/Snackbar';
import Button from '../components/Button';
import '../components/snackbar.css';
import '../components/button.css';

const meta: Meta<typeof Snackbar> = {
  title: 'Messaging & Feedback/Snackbar',
  component: Snackbar,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    message: 'This is a snackbar message.',
    duration: 3000,
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

const SnackbarTemplate = (args: SnackbarProps) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <Button onClick={() => setIsOpen(true)} label="Show Snackbar" />
      <Snackbar {...args} isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
};

export const Default: Story = {
  render: (args) => <SnackbarTemplate {...args} />,
};
