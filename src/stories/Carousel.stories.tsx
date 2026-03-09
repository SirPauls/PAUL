import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import Carousel from '../components/Carousel';
import '../components/carousel.css';

const meta: Meta<typeof Carousel> = {
  title: 'Layout/Carousel',
  component: Carousel,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {
    showArrows: { control: 'boolean' },
    showDots: { control: 'boolean' },
    autoplay: { control: 'boolean' },
    autoplayInterval: { control: 'number' },
  },
  args: {
    showArrows: true,
    showDots: true,
    autoplay: false,
    autoplayInterval: 3000,
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

const Slide = ({ children, color }: { children: React.ReactNode, color: string }) => (
  <div style={{ height: '400px', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: color, color: 'white', fontSize: '2rem' }}>
    {children}
  </div>
);

export const Default: Story = {
  args: {
    children: [
      <Slide key="1" color="#1E40AF">Slide 1</Slide>,
      <Slide key="2" color="#065F46">Slide 2</Slide>,
      <Slide key="3" color="#92400E">Slide 3</Slide>,
    ],
  },
};

export const Autoplay: Story = {
  args: {
    autoplay: true,
    children: [
      <Slide key="1" color="#1E40AF">Slide 1</Slide>,
      <Slide key="2" color="#065F46">Slide 2</Slide>,
      <Slide key="3" color="#92400E">Slide 3</Slide>,
    ],
  },
};

export const NoControls: Story = {
  args: {
    showArrows: false,
    showDots: false,
    children: [
      <Slide key="1" color="#1E40AF">Slide 1</Slide>,
      <Slide key="2" color="#065F46">Slide 2</Slide>,
      <Slide key="3" color="#92400E">Slide 3</Slide>,
    ],
  },
};
