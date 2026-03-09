import type { Meta, StoryObj } from '@storybook/react';

import Card from '../components/Card';
import Button from '../components/Button';
import '../components/card.css';
import '../components/button.css';

const meta: Meta<typeof Card> = {
  title: 'Layout/Card',
  component: Card,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'radio',
      options: ['default', 'elevated', 'outlined'],
    },
  },
  args: {
    children: 'This is the main content of the card. It can be any React node.',
    variant: 'default',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithHeader: Story = {
  args: {
    header: <h2>Card Title</h2>,
  },
};

export const WithFooter: Story = {
  args: {
    footer: <Button variant="primary" label="Action" />,
  },
};

export const FullCard: Story = {
  args: {
    header: <h2>Full Card Example</h2>,
    children: <p>This card has a header, body, and footer. It demonstrates a complete card structure.</p>,
    footer: (
      <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '12px' }}>
        <Button variant="secondary" label="Cancel" />
        <Button variant="primary" label="Confirm" />
      </div>
    ),
  },
};

export const Variants: Story = {
  render: (args) => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
      <Card {...args} variant="default">Default Card</Card>
      <Card {...args} variant="elevated">Elevated Card</Card>
      <Card {...args} variant="outlined">Outlined Card</Card>
    </div>
  ),
};
