import type { Meta, StoryObj } from '@storybook/react';
import TabList from '../components/TabList';
import '../components/tab-list.css';

/**
 * PAUL Industrial Gold Standard TabList
 * 
 * A sleek, high-precision tab component for organizing related content.
 */
const meta: Meta<typeof TabList> = {
  title: 'Navigation/TabList',
  component: TabList,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'A versatile tab component with support for multiple tabs, active states, and disabled states.',
      },
    },
  },
  tags: ['autodocs'],
  args: { 
    tabs: [
      { id: '1', label: 'Overview', content: 'This is the overview content.' },
      { id: '2', label: 'Features', content: 'Detailed feature list goes here.' },
      { id: '3', label: 'Settings', content: 'Manage your preferences in this section.', disabled: true },
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
 * Demonstrating visual variations.
 */
export const Variants: Story = {
  render: (args) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
      <div key="standard">
        <h4>Standard Tabs</h4>
        <TabList {...args} tabs={args.tabs} />
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
      <div key="active">
        <h4>Initially Active Tab 2</h4>
        <TabList {...args} tabs={args.tabs} initialTabId="2" />
      </div>
    </div>
  ),
};

/**
 * Demonstrating different content variations.
 */
export const ContentVariations: Story = {
  args: {
    tabs: [
      { id: '1', label: 'Simple', content: 'Plain text content.' },
      { id: '2', label: 'Rich', content: (
        <div style={{ padding: '16px', backgroundColor: '#f9f9f9', borderRadius: '8px' }}>
          <h3 style={{ marginTop: 0 }}>Rich Header</h3>
          <p>This panel contains <strong>formatted</strong> HTML.</p>
          <ul>
            <li>Nested item 1</li>
            <li>Nested item 2</li>
          </ul>
        </div>
      ) },
    ],
  },
};

/**
 * Demonstrating accessibility features.
 */
export const Accessibility: Story = {
  args: {
    'aria-label': 'Project documentation sections',
  },
};

/**
 * Demonstrating edge cases.
 */
export const EdgeCases: Story = {
  render: (args) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
      <div key="empty">
        <h4>Empty Tabs</h4>
        <TabList {...args} tabs={[]} />
      </div>
      <div key="long">
        <h4>Many Tabs</h4>
        <TabList 
          tabs={[
            { id: '1', label: 'Tab One', content: 'Content 1' },
            { id: '2', label: 'Tab Two', content: 'Content 2' },
            { id: '3', label: 'Tab Three', content: 'Content 3' },
            { id: '4', label: 'Tab Four', content: 'Content 4' },
            { id: '5', label: 'Tab Five', content: 'Content 5' },
            { id: '6', label: 'Tab Six', content: 'Content 6' },
          ]} 
        />
      </div>
    </div>
  ),
};
