// Your React component in TypeScript
import React, { useState } from 'react';

interface DropdownButtonProps {
  // Add any additional props you need
}

const DropdownButton: React.FC<DropdownButtonProps> = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedOption, setSelectedOption] = useState('Option 1'); // Initial selected option

  const options = ['Option 1', 'Option 2', 'Option 3', 'Option 4', 'Option 5'];

  const handleOptionClick = (option: string) => {
    setSelectedOption(option);
    setShowDropdown(false); // Hide the dropdown after selecting an option
  };

  return (
    <div className="menu-items">
      <button
        type="button"
        aria-haspopup="menu"
        aria-expanded={showDropdown ? "true" : "false"}
        onClick={() => setShowDropdown(!showDropdown)}
      >
        {selectedOption} ▼
      </button>
      {showDropdown && (
        <ul className="menu-items">
          {options.map((option) => (
            <ul key={option} onClick={() => handleOptionClick(option)}>
              {option}
            </ul>
          ))}
        </ul>
      )}
    </div>
  );
};

export default DropdownButton;
