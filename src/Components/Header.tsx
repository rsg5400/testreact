import Navbar from './Navbar';
import { FC } from 'react';

import { Link } from 'react-router-dom';

const Logo = require('../Images/logo.webp'); 

const Header:FC = () => {
    return (
    <header>
        <div className="nav-area">
        <Link to="/" className="logo"> 
            <img src={Logo} alt="Logo" className="tomisLogo" />
        </Link>
        <Navbar />
        </div>
    </header>
    );
};

export default Header;


