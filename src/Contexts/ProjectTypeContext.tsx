import { createContext, useState, ReactNode, useEffect /*FC*/ } from 'react';
import { MenuItemInterface, menuItemsData, menuItemsData2, menuItemsData3 } from '../menuItemsData';
import { useNavigate } from 'react-router-dom';



interface ProjectContextType {
    selectedOption: string;
    setSelectedOption: (type: string) => void; // Function to update selected option
    permissions: MenuItemInterface[];
    selectedHomePage: string;

  }

// Create a context with an initial value (e.g., 'Hello, World!')
const ProjectContext = createContext<ProjectContextType>({
    selectedOption: "Option 1",
    setSelectedOption: () => {},
    permissions: menuItemsData,
    selectedHomePage: "/option1"
});

interface ProjectProviderProps {
    children: ReactNode;
  }
  
  export const ProjectProvider: React.FC<ProjectProviderProps> = ({ children }) => {
    const [selectedOption, setSelectedOption] = useState<string>('Option 1');
    const [permissions, setPermissions] = useState<MenuItemInterface[]>([]);
    const [selectedHomePage, setHomePage] = useState<string>("/option1");

    const navigate = useNavigate();
    let new_homepage = "";
    const fetchPermissions = (option: string) => {
        // Example logic: Based on selectedOption, set permissions accordingly
        if (option === 'Option 1') {
            setPermissions(menuItemsData);
            setHomePage("/option1");
            new_homepage = "/option1";
        } else if (option === 'Option 2') {
            setPermissions(menuItemsData2);
            setHomePage("/option2");

            new_homepage = "/option2";
        } else {
            setPermissions(menuItemsData3);
            setHomePage("/option3");

            new_homepage = "/option3";
        }
    };

    useEffect(() => {
    

        fetchPermissions(selectedOption);
        navigate(new_homepage);

    }, [selectedOption]);
    


    return (
      <ProjectContext.Provider value={{ selectedOption, setSelectedOption, permissions, selectedHomePage }}>
        {children}
      </ProjectContext.Provider>
    );
  };
  

export default ProjectContext;