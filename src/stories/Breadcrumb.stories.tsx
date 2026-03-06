import type { Meta, StoryObj } from '@storybook/react';
import Breadcrumb from '../components/Breadcrumb';
import '../components/breadcrumb.css';

/**
 * PAUL Industrial Gold Standard Breadcrumb
 * 
 * A clean, accessible breadcrumb component for intuitive navigation hierarchy.
 */
const meta: Meta<typeof Breadcrumb> = {
  title: 'Navigation/Breadcrumb',
  component: Breadcrumb,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'A robust breadcrumb component with custom separators, active states, and accessibility built-in.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    separator: { control: 'text' },
  },
  args: { 
    items: [
      { label: 'Home', href: '/' },
      { label: 'Components', href: '/components' },
      { label: 'Breadcrumb', isCurrent: true },
    ],
    separator: '/',
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
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <div key="slash">
        <h4>Slash Separator (Default)</h4>
        <Breadcrumb {...args} items={args.items} separator="/" />
      </div>
      <div key="chevron">
        <h4>Chevron Separator</h4>
        <Breadcrumb {...args} items={args.items} separator=">" />
      </div>
      <div key="bullet">
        <h4>Bullet Separator</h4>
        <Breadcrumb {...args} items={args.items} separator="•" />
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
      { label: 'Home', href: '/' },
      { label: 'Very Long Category Name That Might Overflow Or Wrap In Certain Contexts', href: '/long-category' },
      { label: 'Subcategory', href: '/long-category/sub' },
      { label: 'Current Page', isCurrent: true },
    ],
  },
};

/**
 * Demonstrating accessibility features.
 */
export const Accessibility: Story = {
  args: {
    items: [
      { label: 'Accessible Home', href: '/' },
      { label: 'Current Page', isCurrent: true },
    ],
  },
};

/**
 * Demonstrating edge cases.
 */
export const EdgeCases: Story = {
  render: (args) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <div key="single">
        <h4>Single Item</h4>
        <Breadcrumb {...args} items={[{ label: 'Home', href: '/' }]} />
      </div>
      <div key="empty">
        <h4>Empty List</h4>
        <Breadcrumb {...args} items={[]} />
      </div>
      <div key="narrow" style={{ width: '200px', border: '1px solid #eee' }}>
        <h4>Narrow Context</h4>
        <Breadcrumb {...args} items={args.items} />
      </div>
    </div>
  ),
};
