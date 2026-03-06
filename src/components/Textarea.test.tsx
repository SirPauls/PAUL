import { render, screen, fireEvent, act } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import Textarea from './Textarea';

describe('Textarea', () => {
  it('renders correctly with label', () => {
    render(<Textarea label="Test Label" />);
    expect(screen.getByLabelText('Test Label')).toBeInTheDocument();
  });

  it('renders helper text when provided', () => {
    render(<Textarea label="Test" helperText="Helper text" />);
    expect(screen.getByText('Helper text')).toBeInTheDocument();
  });

  it('shows error message and error state', () => {
    render(<Textarea label="Test" hasError errorMessage="Error occurred" />);
    expect(screen.getByRole('textbox')).toHaveAttribute('aria-invalid', 'true');
    expect(screen.getByText('Error occurred')).toBeInTheDocument();
  });

  it('handles disabled state', () => {
    render(<Textarea label="Test" disabled />);
    expect(screen.getByRole('textbox')).toBeDisabled();
  });

  it('passes resize prop to style', () => {
    render(<Textarea label="Test" resize="none" />);
    expect(screen.getByRole('textbox')).toHaveStyle({ resize: 'none' });
  });

  it('calls onChange handler', () => {
    const handleChange = vi.fn();
    render(<Textarea label="Test" onChange={handleChange} />);
    const textarea = screen.getByRole('textbox');
    fireEvent.change(textarea, { target: { value: 'New content' } });
    expect(handleChange).toHaveBeenCalledTimes(1);
  });
});
