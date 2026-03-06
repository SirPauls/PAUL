import React from 'react';
import './list.css';

export interface ListItem {
  id: string;
  content: React.ReactNode;
  icon?: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
}

export interface ListProps {
  /** The items to display in the list */
  items: ListItem[];
  /** Whether the list should be ordered */
  ordered?: boolean;
  /** Custom class name */
  className?: string;
}

/**
 * PAUL Industrial Gold Standard List
 * 
 * A clean, versatile list component for displaying collections of information.
 */
export const List: React.FC<ListProps> = ({
  items,
  ordered = false,
  className,
}) => {
  const baseClass = 'paul-list';
  const classes = [baseClass, className].filter(Boolean).join(' ');

  const ListElement = ordered ? 'ol' : 'ul';

  return (
    <ListElement className={classes}>
      {items.map((item) => (
        <li
          key={item.id}
          className={[
            `${baseClass}__item`,
            item.onClick && `${baseClass}__item--clickable`,
            item.disabled && `${baseClass}__item--disabled`
          ].filter(Boolean).join(' ')}
          onClick={!item.disabled ? item.onClick : undefined}
          role={item.onClick ? 'button' : undefined}
          tabIndex={item.onClick && !item.disabled ? 0 : undefined}
        >
          {item.icon && <span className={`${baseClass}__icon`}>{item.icon}</span>}
          <span className={`${baseClass}__content`}>{item.content}</span>
        </li>
      ))}
    </ListElement>
  );
};

export default List;
