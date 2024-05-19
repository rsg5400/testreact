import { FC } from 'react';
import { SubMenu } from '../menuItemsData';

import MenuItems from "./MenuItems";

interface DropdownInterface {
    submenus: SubMenu[];
    dropdown: boolean;
    depthLevel: number;
}

const Dropdown:FC<DropdownInterface> = ({ submenus, dropdown, depthLevel }) => {
    depthLevel = depthLevel + 1;
    const dropdownClass = depthLevel > 1 ? "dropdown-submenu" : "";
   
    return (
        <ul className={`dropdown ${dropdownClass} ${dropdown ? "show" : ""}`}>
        {submenus.map((submenu, index) => (
         <MenuItems title={submenu.title} subMenu = {submenu.subMenu} url = {submenu.url} depthLevel={depthLevel} key={index} />
        ))}
       </ul>
    );
  };
  
  export default Dropdown;