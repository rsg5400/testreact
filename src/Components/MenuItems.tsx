import Dropdown from './Dropdown';
import { useOutsideClick } from '../UtilityFunctions/utilFunc'

import { FC } from 'react';
import { useState } from "react";

import { MenuItem } from '../menuItemsData'

import { Link } from 'react-router-dom';


const MenuItems:FC<MenuItem> = ({ title, url, subMenu, depthLevel = 0}) => {
    const [dropdown, setDropdown] = useState<boolean>(false);
    
    const ref = useOutsideClick(() => {
        setDropdown(false);
    });
  
    const onMouseEnter = () => {
        setDropdown(true);
       };
       
    const onMouseLeave = () => {
        setDropdown(false);
       };
 
      const toggleDropdown = () => {
        setDropdown((prev) => !prev);
      };
      return (
        <li
          className="menu-items"
          ref={ref}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}>
          {url && subMenu ? (
            <>
              <button
                type="button"
                aria-haspopup="menu"
                aria-expanded={dropdown ? "true" : "false"}
                onClick={() => toggleDropdown()}>
                <Link to={url}>{title}</Link>
                {depthLevel > 0 ? <span>&raquo;</span> : <span className="arrow" />}
              </button>
              <Dropdown
                depthLevel={depthLevel}
                submenus={subMenu}
                dropdown={dropdown}
              />
            </>
          ) : !url && subMenu ? (
            <>
              <button
                type="button"
                aria-haspopup="menu"
                aria-expanded={dropdown ? "true" : "false"}>
                {title}
                {depthLevel > 0 ? <span>&raquo;</span> : <span className="arrow" />}
              </button>
              <Dropdown
                depthLevel={depthLevel}
                submenus={subMenu}
                dropdown={dropdown}
              />
            </>
          ) : (
            <Link to={url}>{title}</Link>
          )}
        </li>
      );
};

export default MenuItems;