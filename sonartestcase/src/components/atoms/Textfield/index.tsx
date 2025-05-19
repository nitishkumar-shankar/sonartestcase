
import React from "react";

interface InputProps {
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
}

const Input: React.FC<InputProps> = ({ placeholder, value, onChange }) => {
  return (
    <input
      type="text"
      placeholder={placeholder}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      data-testid="custom-input"
    />
  );
};

export default Input;