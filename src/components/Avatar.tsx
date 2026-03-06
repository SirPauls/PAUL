import React from 'react';
import './avatar.css';

export interface AvatarProps {
  /** The URL of the avatar image */
  src?: string;
  /** The name of the user for the alt text and initials */
  name: string;
  /** The size of the avatar */
  size?: 'small' | 'medium' | 'large' | 'xlarge';
  /** The shape of the avatar */
  shape?: 'circle' | 'square';
  /** Custom class name */
  className?: string;
  /** Whether the avatar is in a loading state */
  isLoading?: boolean;
}

/**
 * PAUL Industrial Gold Standard Avatar
 * 
 * A clean, expressive avatar component for user identification.
 */
export const Avatar: React.FC<AvatarProps> = ({
  src,
  name,
  size = 'medium',
  shape = 'circle',
  className,
  isLoading = false,
}) => {
  const getInitials = (name: string) => {
    return name.split(' ').map((n) => n[0]).join('').toUpperCase().slice(0, 2);
  };

  const baseClass = 'paul-avatar';
  const classes = [
    baseClass,
    `${baseClass}--${size}`,
    `${baseClass}--${shape}`,
    isLoading && `${baseClass}--loading`,
    className
  ].filter(Boolean).join(' ');

  return (
    <div className={classes} title={name}>
      {isLoading ? (
        <div className={`${baseClass}__loader`} aria-hidden="true" />
      ) : src ? (
        <img className={`${baseClass}__image`} src={src} alt={name} />
      ) : (
        <span className={`${baseClass}__initials`}>{getInitials(name)}</span>
      )}
    </div>
  );
};

export default Avatar;
