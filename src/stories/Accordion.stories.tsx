import type { Meta, StoryObj } from '@storybook/react';
import Accordion from '../components/Accordion';
import './accordion.css';

/**
 * PAUL Industrial Gold Standard Accordion
 * 
 * A clean, accessible accordion for managing collapsible content sections.
 */
const meta: Meta<typeof Accordion> = {
  title: 'Components/Accordion',
  component: Accordion,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'A robust accordion component with multiple item support, sizing, and accessibility built-in.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    allowMultiple: { control: 'boolean' },
    size: {
      control: 'radio',
      options: ['small', 'medium', 'large'],
    },
  },
  args: { 
    allowMultiple: false,
    size: 'medium',
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
 * Demonstrating different sizes.
 */
export const Sizes: Story = {
  render: (args) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      <div key="small">
        <h4>Small</h4>
        <Accordion {...args} items={args.items} size="small" />
      </div>
      <div key="medium">
        <h4>Medium (Default)</h4>
        <Accordion {...args} items={args.items} size="medium" />
      </div>
      <div key="large">
        <h4>Large</h4>
        <Accordion {...args} items={args.items} size="large" />
      </div>
    </div>
  ),
};

/**
 * Demonstrating content variations.
 */
export const ContentVariations: Story = {
  args: {
    items: [
      { id: '1', title: 'Simple Content', content: 'Just some plain text here.' },
      { id: '2', title: 'Rich Content', content: (
        <div>
          <p>This item contains <strong>rich content</strong> like lists:</p>
          <ul>
            <li>Item one</li>
            <li>Item two</li>
          </ul>
        </div>
      ) },
      { id: '3', title: 'Long Title That Might Wrap If The Container Is Too Small For It', content: 'The content remains stable.' },
    ],
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

/**
 * Demonstrating accessibility features.
 */
export const Accessibility: Story = {
  args: {
    items: [
      { id: '1', title: 'Focus Management', content: 'Keyboard users can navigate using Tab and toggle with Enter/Space.' },
      { id: '2', title: 'ARIA Roles', content: 'Appropriate roles (region, button) and attributes (aria-expanded) are used.' },
    ],
  },
};

/**
 * Demonstrating edge cases.
 */
export const EdgeCases: Story = {
  render: (args) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      <div>
        <h3>Empty List</h3>
        <Accordion {...args} items={[]} />
      </div>
      <div>
        <h3>Very Long Content</h3>
        <Accordion {...args} items={[{ id: '1', title: 'Long Content', content: 'Lorem '.repeat(100) }]} />
      </div>
    </div>
  ),
};
