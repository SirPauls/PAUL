import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import Modal, { type ModalProps } from '../components/Modal';
import Button from '../components/Button';
import '../components/modal.css';
import '../components/button.css';

const meta: Meta<typeof Modal> = {
  title: 'Overlays/Modal',
  component: Modal,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'radio',
      options: ['sm', 'md', 'lg', 'xl'],
    },
  },
  args: {
    title: 'Modal Title',
    children: <p>This is the main content of the modal. It can be any React node.</p>,
    size: 'md',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

const ModalTemplate = (args: ModalProps) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <Button onClick={() => setIsOpen(true)} label="Open Modal" />
      <Modal {...args} isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
};

export const Default: Story = {
  render: (args) => <ModalTemplate {...args} />,
};

export const WithFooter: Story = {
  render: (args) => <ModalTemplate {...args} />,
  args: {
    footer: (
      <>
        <Button variant="secondary" label="Cancel" />
        <Button variant="primary" label="Confirm" />
      </>
    ),
  }
};

export const LongContent: Story = {
  render: (args) => <ModalTemplate {...args} />,
  args: {
    children: (
      <>
        <p>This modal contains a lot of content to demonstrate the scrolling behavior.</p>
        {Array.from({ length: 20 }, (_, i) => (
          <p key={i}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        ))}
      </>
    ),
  }
};
