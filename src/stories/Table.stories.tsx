import type { Meta, StoryObj } from '@storybook/react';
import Table from '../components/Table';
import './table.css';

/**
 * PAUL Industrial Gold Standard Table
 * 
 * A clean, high-performance table component for structured data presentation.
 */
const meta: Meta<typeof Table> = {
  title: 'Components/Table',
  component: Table,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'A robust table component with support for custom columns, rows, and responsive horizontal scrolling.',
      },
    },
  },
  tags: ['autodocs'],
  args: { 
    columns: [
      { key: 'name', header: 'Name' },
      { key: 'email', header: 'Email' },
      { key: 'role', header: 'Role' },
      { key: 'status', header: 'Status' },
    ],
    data: [
      { name: 'John Doe', email: 'john@example.com', role: 'Admin', status: 'Active' },
      { name: 'Jane Smith', email: 'jane@example.com', role: 'Editor', status: 'Inactive' },
      { name: 'Bob Johnson', email: 'bob@example.com', role: 'Viewer', status: 'Active' },
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
        <h4>Standard Table</h4>
        <Table {...args} columns={args.columns} data={args.data} />
      </div>
    </div>
  ),
};

/**
 * Demonstrating different content variations.
 */
export const ContentVariations: Story = {
  args: {
    columns: [
      { key: 'id', header: 'ID', width: 50 },
      { key: 'product', header: 'Product Name' },
      { key: 'price', header: 'Price' },
      { key: 'tags', header: 'Tags' },
    ],
    data: [
      { id: '1', product: 'MacBook Pro', price: '$1,999', tags: 'Hardware, Laptop' },
      { id: '2', product: 'Logitech Mouse', price: '$49', tags: 'Peripherals' },
      { id: '3', product: 'UltraWide Monitor', price: '$899', tags: 'Display' },
    ],
  },
};

/**
 * Demonstrating accessibility features.
 */
export const Accessibility: Story = {
  args: {
    'aria-label': 'User management table',
  },
};

/**
 * Demonstrating edge cases.
 */
export const EdgeCases: Story = {
  render: (args) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
      <div key="empty">
        <h4>Empty Data</h4>
        <Table {...args} columns={args.columns} data={[]} />
      </div>
      <div key="responsive">
        <h4>Many Columns (Responsive Test)</h4>
        <Table 
          columns={[
            { key: 'c1', header: 'Col 1' },
            { key: 'c2', header: 'Col 2' },
            { key: 'c3', header: 'Col 3' },
            { key: 'c4', header: 'Col 4' },
            { key: 'c5', header: 'Col 5' },
            { key: 'c6', header: 'Col 6' },
            { key: 'c7', header: 'Col 7' },
            { key: 'c8', header: 'Col 8' },
          ]} 
          data={[{ c1: 'Val 1', c2: 'Val 2', c3: 'Val 3', c4: 'Val 4', c5: 'Val 5', c6: 'Val 6', c7: 'Val 7', c8: 'Val 8' }]}
        />
      </div>
    </div>
  ),
};
