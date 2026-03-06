import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import List, { type ListItem } from '../components/List';
import '../components/list.css';

/**
 * PAUL Industrial Gold Standard List
 * 
 * A clean, versatile list component for displaying collections of information.
 */
const meta: Meta<typeof List> = {
  title: 'Content Display/List',
  component: List,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'A robust list component with support for icons, clickable items, and accessibility.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    ordered: { control: 'boolean' },
  },
  args: { 
    items: [
      { id: '1', content: 'First Item', icon: <span>❶</span> },
      { id: '2', content: 'Second Item', icon: <span>❷</span> },
      { id: '3', content: 'Third Item', icon: <span>❸</span> },
    ],
    ordered: false,
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Default story showing the component in its basic state.
 */
export const Default: Story = {};

/**
 * Demonstrating visual variations.
 */
export const Variants: Story = {
  render: (args) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
      <div key="unordered">
        <h4>Unordered List (Default)</h4>
        <List {...args} items={args.items} ordered={false} />
      </div>
      <div key="ordered">
        <h4>Ordered List</h4>
        <List {...args} items={args.items} ordered={true} />
      </div>
    </div>
  ),
};

/**
 * Demonstrating interactive states.
 */
export const States: Story = {
  render: (args) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
      <div key="clickable">
        <h4>Clickable Items</h4>
        <List {...args} items={args.items.map((item: ListItem) => ({ ...item, onClick: fn() }))} />
      </div>
      <div key="disabled">
        <h4>Disabled Items</h4>
        <List {...args} items={args.items.map((item: ListItem) => ({ ...item, disabled: true, onClick: fn() }))} />
      </div>
    </div>
  ),
};

/**
 * Demonstrating different content variations.
 */
export const ContentVariations: Story = {
  args: {
    items: [
      { id: '1', content: 'Simple Content' },
      { id: '2', content: (
        <div>
          <div style={{ fontWeight: 700 }}>Rich Content</div>
          <div style={{ fontSize: '0.875rem', color: '#666' }}>Subtext or description here</div>
        </div>
      ) },
      { id: '3', content: 'Very long content item that might wrap across multiple lines to show the flexibility of the list layout.' },
    ],
  },
};

/**
 * Demonstrating accessibility features.
 */
export const Accessibility: Story = {
  args: {
    'aria-label': 'Feature list',
  },
};

/**
 * Demonstrating edge cases.
 */
export const EdgeCases: Story = {
  render: (args) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
      <div key="empty">
        <h4>Empty List</h4>
        <List {...args} items={[]} />
      </div>
      <div key="narrow" style={{ width: '200px' }}>
        <h4>Narrow Container</h4>
        <List {...args} items={args.items} />
      </div>
    </div>
  ),
};
