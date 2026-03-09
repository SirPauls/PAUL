import type { Meta, StoryObj } from '@storybook/react';
import TextInputGroup from '../components/TextInputGroup';
import '../components/textinputgroup.css';
import '../components/textinput.css';

const meta: Meta<typeof TextInputGroup> = {
  title: 'Forms/TextInputGroup',
  component: TextInputGroup,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    placeholder: 'username',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    leadingAddon: 'https://',
    trailingAddon: '.com',
  },
};

export const LeadingAddon: Story = {
  args: {
    leadingAddon: '@',
  },
};

export const TrailingAddon: Story = {
  args: {
    trailingAddon: '%',
  },
};
