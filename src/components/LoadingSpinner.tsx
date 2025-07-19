import React from 'react';

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg';
  text?: string;
}

export default function LoadingSpinner({ size = 'md', text }: LoadingSpinnerProps) {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-6 h-6',
    lg: 'w-8 h-8'
  };

  return (
    <div className="flex items-center justify-center space-x-2">
      <div className={`${sizeClasses[size]} animate-spin rounded-full border-2 border-primary border-t-transparent`} />
      {text && (
        <span className="text-sm text-muted-foreground animate-pulse">
          {text}
        </span>
      )}
    </div>
  );
}

export function TypingIndicator() {
  return (
    <div className="flex items-center space-x-1 p-3">
      <div className="flex space-x-1">
        <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" />
        <div 
          className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" 
          style={{ animationDelay: '0.1s' }}
        />
        <div 
          className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" 
          style={{ animationDelay: '0.2s' }}
        />
      </div>
      <span className="text-sm text-muted-foreground ml-2">
        Aluana sedang mengetik...
      </span>
    </div>
  );
}

export function PulseLoader() {
  return (
    <div className="flex justify-center items-center py-4">
      <div className="flex space-x-2">
        <div className="w-3 h-3 bg-primary rounded-full animate-pulse" />
        <div className="w-3 h-3 bg-primary rounded-full animate-pulse" style={{ animationDelay: '0.2s' }} />
        <div className="w-3 h-3 bg-primary rounded-full animate-pulse" style={{ animationDelay: '0.4s' }} />
      </div>
    </div>
  );
}
