import React from 'react';
import './AnimatedButton.css';

interface AnimatedButtonProps {
  text: string;
  onClick?: () => void;
  className?: string;
}

const AnimatedButton = ({ text, onClick, className = '' }: AnimatedButtonProps) => {
  const letters = text.split('');
  
  return (
    <button className={`animated-button ${className}`} onClick={onClick}>
      <span className="span-mother">
        {letters.map((letter, index) => (
          <span key={`mother-${index}`}>{letter}</span>
        ))}
      </span>
      <span className="span-mother2">
        {letters.map((letter, index) => (
          <span key={`mother2-${index}`}>{letter}</span>
        ))}
      </span>
    </button>
  );
};

export default AnimatedButton;
