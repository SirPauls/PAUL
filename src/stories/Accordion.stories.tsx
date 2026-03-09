import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import Accordion from '../components/Accordion';
import '../components/accordion.css';

/**
 * PAUL Industrial Gold Standard Accordion
 * 
 * A sleek, high-performance accordion for managing collapsible content sections.
 */
const meta: Meta<typeof Accordion> = {
  title: 'Content Display/Accordion',
  component: Accordion,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'A robust accordion component with multiple item support, sizing, leading elements, and expand icon control.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    allowMultiple: { control: 'boolean' },
    showExpandIcon: { control: 'boolean' },
    size: {
      control: 'radio',
      options: ['sm', 'md', 'lg', 'xl'],
    },
  },
  args: { 
    allowMultiple: false,
    showExpandIcon: true,
    size: 'md',
    items: [
      { id: '1', title: 'What is PAUL?', content: 'PAUL is a Pattern & Asset UI Library designed for high-performance React applications.' },
      { id: '2', title: 'Why use PAUL?', content: 'Because it sets the industrial gold standard for design systems.' },
      { id: '3', title: 'Is it accessible?', content: 'Yes, every component is built with accessibility as a core foundation.' },
    ],
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Default story showing the component in its basic state.
 */
export const Default: Story = {};

/**
 * Demonstrating multiple item expansion.
 */
export const AllowMultiple: Story = {
  args: {
    allowMultiple: true,
  },
};

/**
 * Demonstrating different sizes from the Figma design.
 */
export const Sizes: Story = {
  render: (args) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
      <div key="sm">
        <h4 style={{ marginBottom: '12px' }}>Small (sm)</h4>
        <Accordion {...args} items={args.items} size="sm" />
      </div>
      <div key="md">
        <h4 style={{ marginBottom: '12px' }}>Medium (md)</h4>
        <Accordion {...args} items={args.items} size="md" />
      </div>
      <div key="lg">
        <h4 style={{ marginBottom: '12px' }}>Large (lg)</h4>
        <Accordion {...args} items={args.items} size="lg" />
      </div>
      <div key="xl">
        <h4 style={{ marginBottom: '12px' }}>Extra Large (xl)</h4>
        <Accordion {...args} items={args.items} size="xl" />
      </div>
    </div>
  ),
};

/**
 * Demonstrating leading elements (icons).
 */
export const LeadingElements: Story = {
  args: {
    items: [
      { 
        id: '1', 
        title: 'Account Settings', 
        content: 'Manage your profile, email, and security settings.',
        leadingElement: (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>
          </svg>
        )
      },
      { 
        id: '2', 
        title: 'Notifications', 
        content: 'Control how you receive alerts and updates.',
        leadingElement: (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/>
          </svg>
        )
      },
      { 
        id: '3', 
        title: 'Billing History', 
        content: 'View your invoices and payment methods.',
        leadingElement: (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="2" y="4" width="20" height="16" rx="2"/><line x1="2" y1="10" x2="22" y2="10"/>
          </svg>
        )
      },
    ],
  },
};

/**
 * Demonstrating accordion without expand icons.
 */
export const NoExpandIcon: Story = {
  args: {
    showExpandIcon: false,
  },
};

/**
 * Demonstrating interactive states.
 */
export const States: Story = {
  args: {
    items: [
      { id: '1', title: 'Normal Item', content: 'This is a normal item.' },
      { id: '2', title: 'Disabled Item', content: 'This is a disabled item.', disabled: true },
      { id: '3', title: 'Initially Open Item', content: 'This item starts open.' },
    ],
    initialOpenIds: ['3'],
  },
};
