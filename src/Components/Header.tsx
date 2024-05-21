import Navbar from './Navbar';
import { FC, useContext } from 'react';

import { Link } from 'react-router-dom';

import ProjectContext from "../Contexts/ProjectTypeContext"
//const Logo = require('C:\Users\robert.gallagher\tomisredesign\src\Images\logo.webp'); 
//             <img src={Logo} alt="Logo" className="tomisLogo" />



const Header:FC = () => {
    const {selectedHomePage} = useContext(ProjectContext);
    return (
    <header>
        <div className="nav-area">
        <Link to={selectedHomePage} className="logo"> 
        Logo
        </Link>
        <Navbar />
        </div>
    </header>
    );
};

export default Header;


