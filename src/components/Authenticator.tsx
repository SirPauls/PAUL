import React, { useState } from 'react';
import './authenticator.css';
import Button from './Button';

export interface AuthenticatorProps {
  /** The title of the login form */
  title?: string;
  /** Callback for when login is successful */
  onLogin?: (email: string) => void;
  /** Callback for when registration is successful */
  onRegister?: (email: string) => void;
  /** Initial mode */
  initialMode?: 'login' | 'register';
  /** Custom class name */
  className?: string;
  /** Is the component in a loading state? */
  isLoading?: boolean;
  /** Error message to display */
  errorMessage?: string;
}

/**
 * PAUL Industrial Gold Standard Authenticator
 * 
 * A sleek, high-performance authentication interface for secure user entry.
 */
export const Authenticator: React.FC<AuthenticatorProps> = ({
  title = 'Welcome back',
  onLogin,
  onRegister,
  initialMode = 'login',
  className,
  isLoading = false,
  errorMessage,
}) => {
  const [mode, setMode] = useState<'login' | 'register'>(initialMode);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (mode === 'login' && onLogin) {
      onLogin(email);
    } else if (mode === 'register' && onRegister) {
      onRegister(email);
    }
  };

  const baseClass = 'paul-authenticator';
  const classes = [baseClass, className].filter(Boolean).join(' ');

  return (
    <div className={classes}>
      <div className={`${baseClass}__card`}>
        <h2 className={`${baseClass}__title`}>{mode === 'login' ? title : 'Create an account'}</h2>
        {errorMessage && <div className={`${baseClass}__error`} role="alert">{errorMessage}</div>}
        
        <form className={`${baseClass}__form`} onSubmit={handleSubmit}>
          <div className={`${baseClass}__field`}>
            <label className={`${baseClass}__label`} htmlFor="email">Email</label>
            <input 
              className={`${baseClass}__input`}
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              disabled={isLoading}
              placeholder="you@example.com"
            />
          </div>
          
          <div className={`${baseClass}__field`}>
            <label className={`${baseClass}__label`} htmlFor="password">Password</label>
            <input 
              className={`${baseClass}__input`}
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              disabled={isLoading}
              placeholder="••••••••"
            />
          </div>
          
          <Button 
            className={`${baseClass}__submit`}
            type="submit"
            isLoading={isLoading}
            label={mode === 'login' ? 'Sign In' : 'Create Account'}
          />
        </form>
        
        <div className={`${baseClass}__footer`}>
          <button 
            className={`${baseClass}__toggle`}
            onClick={() => setMode(mode === 'login' ? 'register' : 'login')}
            type="button"
            disabled={isLoading}
          >
            {mode === 'login' ? "Don't have an account? Sign up" : "Already have an account? Sign in"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Authenticator;
