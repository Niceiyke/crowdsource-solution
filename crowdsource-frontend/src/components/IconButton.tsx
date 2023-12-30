// components/IconButton.tsx
import React, { ReactNode } from 'react';

interface IconButtonProps {
  icon: ReactNode; // React component type for the icon
  onClick: () => void;
  color?: string;
  size?: number;
}

const IconButton: React.FC<IconButtonProps> = ({ icon: Icon, onClick, color = 'text-black', size = 24 }) => {
  return (
    <button
      onClick={onClick}
      className={`pt-2 pl-4 focus:outline-none ${color}`}
      style={{ fontSize: `${size}px` }}
    >
     { Icon }
    </button>
  );
};

export default IconButton;
