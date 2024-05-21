// Your React component in TypeScript
import React, { useState, useContext } from 'react';
import ProjectContext from '../Contexts/ProjectTypeContext';
interface DropdownInterface {
  items: string[]

}
//make funciton more universal for starting state 
const ProjectDropDown: React.FC<DropdownInterface> = ({items}) => {
  const [dropdown, setShowDropdown] = useState(false);

    const {selectedOption, setSelectedOption} = useContext(ProjectContext);
 // const [selectedOption, setSelectedOption] = useState(items[0]); // Initial selected option. change when context is passed



  const handleOptionClick = (option: string) => {
    setSelectedOption(option);
    setShowDropdown(false); // Hide the dropdown after selecting an option
  };

  return (
    <div className="menu-items">
      <button
        type="button"
        aria-haspopup="menu"
        aria-expanded={dropdown ? "true" : "false"}
        onClick={() => setShowDropdown(!dropdown)}
      >
        Project: {selectedOption} ▼
      </button>
      {dropdown && (
        <ul className={`dropdown show`}>    
            {items.map((option) => (
            <li key={option} onClick={() => handleOptionClick(option)}>
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ProjectDropDown;
