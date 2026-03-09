import { render, screen, fireEvent, act } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import Tooltip from './Tooltip';

describe('Tooltip', () => {
  it('renders children correctly', () => {
    render(
      <Tooltip content="Tooltip text">
        <button>Trigger</button>
      </Tooltip>
    );
    expect(screen.getByRole('button', { name: 'Trigger' })).toBeInTheDocument();
  });

  it('shows tooltip on mouse enter', async () => {
    vi.useFakeTimers();
    render(
      <Tooltip content="Tooltip text">
        <button>Trigger</button>
      </Tooltip>
    );

    const trigger = screen.getByRole('button', { name: 'Trigger' });
    fireEvent.mouseEnter(trigger);

    act(() => {
      vi.advanceTimersByTime(200);
    });

    expect(screen.getByRole('tooltip')).toBeInTheDocument();
    expect(screen.getByText('Tooltip text')).toBeInTheDocument();
    
    vi.useRealTimers();
  });

  it('hides tooltip on mouse leave', async () => {
    vi.useFakeTimers();
    render(
      <Tooltip content="Tooltip text">
        <button>Trigger</button>
      </Tooltip>
    );

    const trigger = screen.getByRole('button', { name: 'Trigger' });
    fireEvent.mouseEnter(trigger);
    
    act(() => {
      vi.advanceTimersByTime(200);
    });

    expect(screen.getByRole('tooltip')).toBeInTheDocument();

    fireEvent.mouseLeave(trigger);
    expect(screen.queryByRole('tooltip')).not.toBeInTheDocument();
    
    vi.useRealTimers();
  });

  it('adds aria-describedby to trigger when open', async () => {
    vi.useFakeTimers();
    render(
      <Tooltip content="Tooltip text">
        <button>Trigger</button>
      </Tooltip>
    );

    const trigger = screen.getByRole('button', { name: 'Trigger' });
    
    // Initially no aria-describedby
    expect(trigger).not.toHaveAttribute('aria-describedby');

    fireEvent.mouseEnter(trigger);
    act(() => {
      vi.advanceTimersByTime(0);
    });

    expect(trigger).toHaveAttribute('aria-describedby');
    
    vi.useRealTimers();
  });

  it('handles focus events', async () => {
    vi.useFakeTimers();
    render(
      <Tooltip content="Tooltip text">
        <button>Trigger</button>
      </Tooltip>
    );

    const trigger = screen.getByRole('button', { name: 'Trigger' });
    fireEvent.focus(trigger);
    
    act(() => {
      vi.advanceTimersByTime(0);
    });

    expect(screen.getByRole('tooltip')).toBeInTheDocument();
    
    vi.useRealTimers();
  });
});
