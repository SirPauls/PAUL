import type { Meta, StoryObj } from '@storybook/react';
import Carousel from '../components/Carousel';
import '../components/carousel.css';

/**
 * PAUL Industrial Gold Standard Carousel
 * 
 * A high-performance, smooth-transitioning carousel for immersive visual storytelling.
 */
const meta: Meta<typeof Carousel> = {
  title: 'Content Display/Carousel',
  component: Carousel,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'A robust carousel component with custom titles, multiple interactive states, and responsive behavior.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    autoPlay: { control: 'boolean' },
    showDots: { control: 'boolean' },
    showArrows: { control: 'boolean' },
    interval: { control: 'number' },
  },
  args: { 
    autoPlay: false,
    showDots: true,
    showArrows: true,
    interval: 5000,
    items: [
      { id: '1', image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=800&h=400', title: 'Forest Adventure', description: 'Explore the depths of the ancient woodland.' },
      { id: '2', image: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=800&h=400', title: 'Mountain Peak', description: 'Experience the crisp air of the high altitude.' },
      { id: '3', image: 'https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?auto=format&fit=crop&w=800&h=400', title: 'River Stream', description: 'Find peace in the gentle flow of nature.' },
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
      <div key="arrows">
        <h4>With Arrows Only</h4>
        <Carousel {...args} items={args.items} showDots={false} />
      </div>
      <div key="dots">
        <h4>With Dots Only</h4>
        <Carousel {...args} items={args.items} showArrows={false} />
      </div>
      <div key="none">
        <h4>No Controls</h4>
        <Carousel {...args} items={args.items} showArrows={false} showDots={false} />
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
      <div key="autoplay">
        <h4>Auto Play Enabled</h4>
        <Carousel {...args} items={args.items} autoPlay interval={3000} />
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
      { id: '1', image: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=800&h=400', title: 'Lake Reflection' },
      { id: '2', image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&h=400', description: 'Just a description, no title.' },
      { id: '3', image: 'https://images.unsplash.com/photo-1434725039720-abb26e22ebe5?auto=format&fit=crop&w=800&h=400' },
    ],
  },
};

/**
 * Demonstrating accessibility features.
 */
export const Accessibility: Story = {
  args: {
    'aria-label': 'Featured projects carousel',
  },
};

/**
 * Demonstrating edge cases.
 */
export const EdgeCases: Story = {
  render: (args) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
      <div key="single">
        <h4>Single Item</h4>
        <Carousel {...args} items={[args.items[0]]} />
      </div>
      <div key="narrow" style={{ width: '400px' }}>
        <h4>Narrow Container</h4>
        <Carousel {...args} items={args.items} />
      </div>
    </div>
  ),
};
