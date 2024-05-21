import Navbar from './Navbar';
import { FC } from 'react';

import { Link } from 'react-router-dom';

//const Logo = require('C:\Users\robert.gallagher\tomisredesign\src\Images\logo.webp'); 
//             <img src={Logo} alt="Logo" className="tomisLogo" />

const Header:FC = () => {
    return (
    <header>
        <div className="nav-area">
        <Link to="/" className="logo"> 
        Logo
        </Link>
        <Navbar />
        </div>
    </header>
    );
};

export default Header;


