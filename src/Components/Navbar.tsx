import { FC, useContext } from 'react'
import { menuItemsData } from '../menuItemsData';
import MenuItems from './MenuItems';
import DropDownNameInPlace from './ProjectType';

import ProjectContext from '../Contexts/ProjectTypeContext';

const Navbar:FC = () => {
  //This all needs to be grabbed from context
    const {permissions} = useContext(ProjectContext)
    const projectTypes: string[] = ['Option 1', 'Option 2', 'Option 3'];

    const depthlevel = 0;



    return (
        <nav className="desktop-nav">
          <ul className="menus">
            <DropDownNameInPlace items={projectTypes} />

            {permissions.map((menu, index) => {
                return <MenuItems subMenu={menu.subMenu} title={menu.title} url={menu.url} depthLevel={depthlevel} key={index} />;
            })}
          </ul>
        </nav>
      );
};

export default Navbar;