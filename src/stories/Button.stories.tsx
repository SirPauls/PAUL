import type { Meta, StoryObj } from '@storybook/react';

import { fn } from '@storybook/test';
import Button from '../components/Button';
import '../components/button.css';
import { ArrowLeftIcon, ArrowRightIcon } from '@phosphor-icons/react';

/**
 * PAUL Industrial Gold Standard Button
 * 
 * A sleek, high-performance button engineered for precision and reliability.
 */
const meta: Meta<typeof Button> = {
  title: 'Actions/Button',
  component: Button,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A versatile button component with multiple variants, sizes, and states.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'outlined', 'ghost', 'danger'],
      description: 'The visual style of the button',
    },
    size: {
      control: 'radio',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
      description: 'The size of the button',
    },
    isLoading: { control: 'boolean' },
    disabled: { control: 'boolean' },
    leftIcon: {
      control: 'radio',
      options: ['none', 'arrow'],
      mapping: {
        none: undefined,
        arrow: <ArrowLeftIcon />,
      },
    },
    rightIcon: {
      control: 'radio',
      options: ['none', 'arrow'],
      mapping: {
        none: undefined,
        arrow: <ArrowRightIcon />,
      },
    },
    iconOnly: {
      control: 'radio',
      options: ['none', 'arrow'],
      mapping: {
        none: undefined,
        arrow: <ArrowRightIcon />,
      },
    },
  },
  args: { 
    onClick: fn(),
    label: 'Button',
    variant: 'primary',
    size: 'md',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Default story showing the component in its basic state.
 */
export const Default: Story = {
  args: {
    label: 'Default Button',
  },
};

/**
 * Demonstrating all visual variations.
 */
export const Variants: Story = {
  render: (args) => (
    <div style={{ display: 'flex', gap: '12px' }}>
      <Button {...args} variant="primary" label="Primary" />
      <Button {...args} variant="secondary" label="Secondary" />
      <Button {...args} variant="outlined" label="Outlined" />
      <Button {...args} variant="ghost" label="Ghost" />
      <Button {...args} variant="danger" label="Danger" />
    </div>
  ),
};

/**
 * Demonstrating all sizes from Figma.
 */
export const Sizes: Story = {
  render: (args) => (
    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
      <Button {...args} size="xs" label="Extra Small (xs)" />
      <Button {...args} size="sm" label="Small (sm)" />
      <Button {...args} size="md" label="Medium (md)" />
      <Button {...args} size="lg" label="Large (lg)" />
      <Button {...args} size="xl" label="Extra Large (xl)" />
    </div>
  ),
};

/**
 * Demonstrating icon placement options.
 */
export const WithIcons: Story = {
  render: (args) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <div style={{ display: 'flex', gap: '12px' }}>
        <Button 
          {...args} 
          label="Left Icon" 
          leftIcon={<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>} 
        />
        <Button 
          {...args} 
          label="Right Icon" 
          rightIcon={<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>} 
        />
      </div>
      <div style={{ display: 'flex', gap: '12px' }}>
        <Button 
          {...args} 
          iconOnly={<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="16"/><line x1="8" y1="12" x2="16" y2="12"/></svg>} 
          aria-label="Add item"
        />
        <Button 
          {...args} 
          variant="secondary"
          iconOnly={<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>} 
          aria-label="Edit item"
        />
      </div>
    </div>
  ),
};

/**
 * Demonstrating loading states.
 */
export const Loading: Story = {
  args: {
    isLoading: true,
    label: 'Loading...',
  },
};
