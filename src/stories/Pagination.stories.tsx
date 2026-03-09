import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import Pagination, { type PaginationProps } from '../components/Pagination';
import '../components/pagination.css';

const meta: Meta<typeof Pagination> = {
  title: 'Navigation/Pagination',
  component: Pagination,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    totalPages: 10,
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

const PaginationTemplate = (args: PaginationProps) => {
  const [currentPage, setCurrentPage] = useState(1);
  return <Pagination {...args} currentPage={currentPage} onPageChange={setCurrentPage} />;
};

export const Default: Story = {
  render: (args) => <PaginationTemplate {...args} />,
};
