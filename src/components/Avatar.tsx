import React from 'react';
import './avatar.css';

export interface AvatarProps {
  /** The URL of the avatar image */
  src?: string;
  /** The name of the user for the alt text and initials */
  name: string;
  /** The size of the avatar */
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
  /** The shape of the avatar */
  shape?: 'circle' | 'square';
  /** Status indicator */
  status?: 'online' | 'offline' | 'away' | 'busy';
  /** Custom class name */
  className?: string;
}

/**
 * PAUL Industrial Gold Standard Avatar
 * 
 * A sleek, high-performance avatar component for user identification.
 */
export const Avatar: React.FC<AvatarProps> = ({
  src,
  name,
  size = 'md',
  shape = 'circle',
  status,
  className,
}) => {
  const getInitials = (name: string) => {
    return name.split(' ').map((n) => n[0]).join('').toUpperCase().slice(0, 2);
  };

  const baseClass = 'paul-avatar';
  const classes = [
    baseClass,
    `${baseClass}--${size}`,
    `${baseClass}--${shape}`,
    className
  ].filter(Boolean).join(' ');

  return (
    <div className={classes} title={name}>
      {src ? (
        <img className={`${baseClass}__image`} src={src} alt={name} />
      ) : (
        <span className={`${baseClass}__initials`}>{getInitials(name)}</span>
      )}
      {status && (
        <span className={`${baseClass}__status ${baseClass}__status--${status}`} aria-hidden="true" />
      )}
    </div>
  );
};

export default Avatar;
