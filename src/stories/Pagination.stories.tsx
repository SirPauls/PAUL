import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import Pagination from '../components/Pagination';
import '../components/pagination.css';

/**
 * PAUL Industrial Gold Standard Pagination
 * 
 * A clean, accessible pagination component for navigating large datasets.
 */
const meta: Meta<typeof Pagination> = {
  title: 'Navigation/Pagination',
  component: Pagination,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A versatile pagination component with support for multiple pages, active states, and disabled states.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    currentPage: { control: { type: 'number', min: 1 } },
    totalPages: { control: { type: 'number', min: 1 } },
    onPageChange: { action: 'onPageChange' },
    disabled: { control: 'boolean' },
  },
  args: { 
    currentPage: 1,
    totalPages: 10,
    onPageChange: fn(),
    disabled: false,
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
      <div key="small">
        <h4>Small Range (3 Pages)</h4>
        <Pagination {...args} currentPage={args.currentPage} onPageChange={args.onPageChange} totalPages={3} />
      </div>
      <div key="medium">
        <h4>Medium Range (10 Pages)</h4>
        <Pagination {...args} currentPage={args.currentPage} onPageChange={args.onPageChange} totalPages={10} />
      </div>
      <div key="large">
        <h4>Large Range (50 Pages)</h4>
        <Pagination {...args} currentPage={args.currentPage} onPageChange={args.onPageChange} totalPages={50} />
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
      <div key="disabled">
        <h4>Disabled Pagination</h4>
        <Pagination {...args} currentPage={args.currentPage} totalPages={args.totalPages} onPageChange={args.onPageChange} disabled />
      </div>
      <div key="page5">
        <h4>Active Page 5</h4>
        <Pagination {...args} totalPages={args.totalPages} onPageChange={args.onPageChange} currentPage={5} />
      </div>
    </div>
  ),
};

/**
 * Demonstrating accessibility features.
 */
export const Accessibility: Story = {
  args: {
    'aria-label': 'Search results pagination',
  },
};

/**
 * Demonstrating edge cases.
 */
export const EdgeCases: Story = {
  render: (args) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
      <div key="single">
        <h4>Single Page</h4>
        <Pagination {...args} currentPage={1} onPageChange={args.onPageChange} totalPages={1} />
      </div>
      <div key="zero">
        <h4>Zero Pages</h4>
        <Pagination {...args} currentPage={1} onPageChange={args.onPageChange} totalPages={0} />
      </div>
    </div>
  ),
};
