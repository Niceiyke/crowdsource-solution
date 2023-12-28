// src/components/Button.tsx
import React from 'react';
import { Link } from 'react-router-dom';

interface ButtonProps {
  to: string;
  text: string;
}

const QuestionButton: React.FC<ButtonProps> = ({ to, text }) => {
  return (
    <Link to={to} className="bg-green-700 text-white px-4 py-2 rounded-md hover:bg-green-800">
      {text}
    </Link>
  );
};

export default QuestionButton;
