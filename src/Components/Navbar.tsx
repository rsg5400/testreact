import { FC } from 'react'
import { menuItemsData } from '../menuItemsData';
import MenuItems from './MenuItems';


const Navbar:FC = () => {
    const depthlevel = 0;
    return (
        <nav className="desktop-nav">
          <ul className="menus">
            {menuItemsData.map((menu, index) => {
                return <MenuItems subMenu={menu.subMenu} title={menu.title} url={menu.url} depthLevel={depthlevel} key={index} />;
            })}
          </ul>
        </nav>
      );
};

export default Navbar;