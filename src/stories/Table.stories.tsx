import type { Meta, StoryObj } from '@storybook/react';
import Table from '../components/Table';
import '../components/table.css';

const meta: Meta<typeof Table> = {
  title: 'Data Display/Table',
  component: Table,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  args: {
    columns: [
      { key: 'name', title: 'Name' },
      { key: 'title', title: 'Title' },
      { key: 'email', title: 'Email' },
      { key: 'role', title: 'Role' },
    ],
    data: [
      { name: 'Jane Cooper', title: 'Regional Paradigm Technician', email: 'jane.cooper@example.com', role: 'Admin' },
      { name: 'Cody Fisher', title: 'Product Directives Officer', email: 'cody.fisher@example.com', role: 'Owner' },
      { name: 'Esther Howard', title: 'Forward Response Developer', email: 'esther.howard@example.com', role: 'Member' },
      { name: 'Jenny Wilson', title: 'Central Security Manager', email: 'jenny.wilson@example.com', role: 'Member' },
      { name: 'Kristin Watson', title: 'Lead Implementation Liaison', email: 'kristin.watson@example.com', role: 'Admin' },
      { name: 'Cameron Williamson', title: 'Internal Applications Engineer', email: 'cameron.williamson@example.com', role: 'Member' },
    ],
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
