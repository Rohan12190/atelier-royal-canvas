import React, { useState, useRef } from 'react';
import './AnimatedButton.css';

interface UniversalAnimatedButtonProps {
  text: string;
  onClick?: (e?: React.MouseEvent<HTMLButtonElement>) => void;
  className?: string;
  variant?: 'default' | 'outline' | 'ghost';
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
}

const UniversalAnimatedButton = ({ 
  text, 
  onClick, 
  className = '',
  variant = 'default',
  disabled = false,
  type = 'button'
}: UniversalAnimatedButtonProps) => {
  const [isAnimating, setIsAnimating] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const letters = text.split('');
  
  const getVariantClass = () => {
    switch (variant) {
      case 'outline':
        return 'variant-outline';
      case 'ghost':
        return 'variant-ghost';
      default:
        return '';
    }
  };
  
  const handleMouseEnter = () => {
    if (disabled) return;
    
    // Clear any existing timeout
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    
    // Set animating state with a small delay to prevent rapid triggers
    timeoutRef.current = setTimeout(() => {
      setIsAnimating(true);
    }, 50);
  };
  
  const handleMouseLeave = () => {
    // Clear timeout on leave
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    
    // Reset animation after a delay to allow completion
    timeoutRef.current = setTimeout(() => {
      setIsAnimating(false);
    }, 100);
  };
  
  return (
    <button 
      className={`animated-button ${getVariantClass()} ${isAnimating ? 'is-animating' : ''} ${className}`} 
      onClick={onClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      disabled={disabled}
      type={type}
    >
      <span className="span-mother">
        {letters.map((letter, index) => (
          <span key={`mother-${index}`}>{letter === ' ' ? '\u00A0' : letter}</span>
        ))}
      </span>
      <span className="span-mother2">
        {letters.map((letter, index) => (
          <span key={`mother2-${index}`}>{letter === ' ' ? '\u00A0' : letter}</span>
        ))}
      </span>
    </button>
  );
};

export default UniversalAnimatedButton;