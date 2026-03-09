import React from 'react';
import TextInput, { type TextInputProps } from './TextInput';
import './textinputgroup.css';

export interface TextInputGroupProps extends TextInputProps {
  /** Addon to display before the input */
  leadingAddon?: React.ReactNode;
  /** Addon to display after the input */
  trailingAddon?: React.ReactNode;
}

/**
 * PAUL Industrial Gold Standard TextInputGroup
 * 
 * A component for grouping a text input with addons.
 */
export const TextInputGroup: React.FC<TextInputGroupProps> = ({
  leadingAddon,
  trailingAddon,
  ...props
}) => {
  const baseClass = 'paul-text-input-group';

  return (
    <div className={baseClass}>
      {leadingAddon && <span className={`${baseClass}__addon`}>{leadingAddon}</span>}
      <TextInput {...props} />
      {trailingAddon && <span className={`${baseClass}__addon`}>{trailingAddon}</span>}
    </div>
  );
};

export default TextInputGroup;
