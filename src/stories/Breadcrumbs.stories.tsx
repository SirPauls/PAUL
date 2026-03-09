import type { Meta, StoryObj } from '@storybook/react';

import Breadcrumbs from '../components/Breadcrumbs';
import '../components/breadcrumbs.css';

/**
 * PAUL Industrial Gold Standard Breadcrumbs
 * 
 * A sleek, high-performance breadcrumb component for intuitive site navigation.
 */
const meta: Meta<typeof Breadcrumbs> = {
  title: 'Navigation/Breadcrumbs',
  component: Breadcrumbs,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'A versatile breadcrumb component with support for icons, custom separators, and responsive collapsing.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    maxItems: { control: 'number' },
  },
  args: { 
    items: [
      { id: '1', label: 'Home page', href: '#' },
      { id: '2', label: 'Sub page', href: '#' },
      { id: '3', label: 'Target page', active: true },
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
 * Demonstrating the use of icons as items.
 */
export const WithIcons: Story = {
  args: {
    items: [
      { 
        id: '1', 
        label: '', 
        href: '#',
        icon: (
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>
          </svg>
        )
      },
      { id: '2', label: 'Sub page', href: '#' },
      { id: '3', label: 'Target page', active: true },
    ],
  },
};

/**
 * Demonstrating custom separators.
 */
export const CustomSeparator: Story = {
  args: {
    separator: <span>/</span>,
  },
};

/**
 * Demonstrating responsive collapsing when there are many items.
 */
export const Collapsed: Story = {
  args: {
    items: [
      { id: '1', label: 'Home', href: '#' },
      { id: '2', label: 'Products', href: '#' },
      { id: '3', label: 'Electronics', href: '#' },
      { id: '4', label: 'Audio', href: '#' },
      { id: '5', label: 'Headphones', active: true },
    ],
    maxItems: 4,
  },
};
