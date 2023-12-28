// src/components/GenericInput.tsx
import React, { ChangeEvent } from 'react';

interface GenericInputProps {
  label: string;
  type: string;
  id: string;
  value: string;
  onChange: (value: string) => void;
  required?: boolean;
}

const GenericInput: React.FC<GenericInputProps> = ({
  label,
  type,
  id,
  value,
  onChange,
  required = false,
}) => {
  return (
    <div className="mb-4">
      <label htmlFor={id} className="block text-sm font-medium text-gray-600">
        {label}
      </label>
      <input
        type={type}
        id={id}
        name={id}
        value={value}
        onChange={(e: ChangeEvent<HTMLInputElement>) => onChange(e.target.value)}
        className="mt-1 p-2 w-full border rounded-md"
        required={required}
      />
    </div>
  );
};

export default GenericInput;
