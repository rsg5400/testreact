import { createContext, useState, ReactNode, useEffect } from 'react';
import { MenuItemInterface, menuItemsData, menuItemsData2, menuItemsData3 } from '../menuItemsData';

interface ProjectContextType {
    selectedOption: string;
    setSelectedOption: (type: string) => void; // Function to update selected option
    permissions: MenuItemInterface[];
  }

// Create a context with an initial value (e.g., 'Hello, World!')
const ProjectContext = createContext<ProjectContextType>({
    selectedOption: "Option 1",
    setSelectedOption: () => {},
    permissions: menuItemsData
});

interface ProjectProviderProps {
    children: ReactNode;
  }
  
  export const ProjectProvider: React.FC<ProjectProviderProps> = ({ children }) => {
    const [selectedOption, setSelectedOption] = useState<string>('Option 1');
    const [permissions, setPermissions] = useState<MenuItemInterface[]>([]);
   
    useEffect(() => {

    const fetchPermissions = (option: string) => {
        // Example logic: Based on selectedOption, set permissions accordingly
        if (option === 'Option 1') {
            setPermissions(menuItemsData);
        } else if (option === 'Option 2') {
            setPermissions(menuItemsData2);
        } else {
            setPermissions(menuItemsData3);
        }
    };

    fetchPermissions(selectedOption);
}, [selectedOption]);
    


    return (
      <ProjectContext.Provider value={{ selectedOption, setSelectedOption, permissions }}>
        {children}
      </ProjectContext.Provider>
    );
  };
  

export default ProjectContext;