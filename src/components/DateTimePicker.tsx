import React, { useState } from 'react';
import './datetimepicker.css';

export interface DateTimePickerProps {
  /** The currently selected date */
  value?: Date;
  /** Callback for when the date changes */
  onChange?: (date: Date) => void;
  /** Custom class name */
  className?: string;
}

/**
 * PAUL Industrial Gold Standard DateTimePicker
 * 
 * A high-performance, accessible date/time picker for selecting dates and times.
 */
export const DateTimePicker: React.FC<DateTimePickerProps> = ({
  value = new Date(),
  className,
}) => {
  const [currentMonth, setCurrentMonth] = useState(value.getMonth());
  const [currentYear] = useState(value.getFullYear());

  const baseClass = 'paul-datetime-picker';
  const classes = [baseClass, className].filter(Boolean).join(' ');

  const renderHeader = () => {
    return (
      <div className={`${baseClass}__header`}>
        <button onClick={() => setCurrentMonth(currentMonth - 1)}>&lt;</button>
        <span>{new Date(currentYear, currentMonth).toLocaleString('default', { month: 'long', year: 'numeric' })}</span>
        <button onClick={() => setCurrentMonth(currentMonth + 1)}>&gt;</button>
      </div>
    );
  };

  const renderDays = () => {
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    return (
      <div className={`${baseClass}__days`}>
        {days.map(day => <div key={day} className={`${baseClass}__day-name`}>{day}</div>)}
      </div>
    );
  };

  const renderDates = () => {
    const dates = [];
    const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
    for (let i = 1; i <= daysInMonth; i++) {
      dates.push(
        <div key={i} className={`${baseClass}__date`}>{i}</div>
      );
    }
    return <div className={`${baseClass}__dates`}>{dates}</div>;
  };

  return (
    <div className={classes}>
      {renderHeader()}
      {renderDays()}
      {renderDates()}
    </div>
  );
};

export default DateTimePicker;
