import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Form, FormControl } from '../components/Form';
import { Button } from '../components/Button';
import { Checkbox } from '../components/Checkbox';
import { Dropdown } from '../components/Dropdown';
import { TextInput } from '../components/TextInput';
import '../components/form.css';
import '../components/button.css';
import '../components/checkbox.css';
import '../components/combobox.css';
import '../components/dropdown.css';
import '../components/textinput.css';

const meta: Meta<typeof Form> = {
  title: 'Forms/Form',
  component: Form,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Form>
      <FormControl label="Name">
        <TextInput placeholder="Enter your name" />
      </FormControl>
      <FormControl label="Email" error="Please enter a valid email address.">
        <TextInput placeholder="Enter your email" />
      </FormControl>
      <FormControl label="Favorite Color">
        <Dropdown 
          placeholder="Select a color"
          options={[
            { value: 'red', label: 'Red' },
            { value: 'blue', label: 'Blue' },
            { value: 'green', label: 'Green' },
          ]}
        />
      </FormControl>
      <FormControl>
        <Checkbox label="I agree to the terms and conditions" />
      </FormControl>
      <Button type="submit" variant="primary" label="Submit" />
    </Form>
  ),
};
