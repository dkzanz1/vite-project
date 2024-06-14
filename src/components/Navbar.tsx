import React from 'react';
import "../styles/Navbar.css";

const Navbar: React.FC = () => {
    return (
        <nav className='navbar'>
        <ul className='.navbar-list'>
            <li><a href="/link1">Link 1</a></li>
            <li><a href="/link2">Link 2</a></li>
            <li><a href="/link3">Link 3</a></li>
            <li><a href="/link4">Link 4</a></li>
            <li><a href="/link5">Link 5</a></li>
        </ul>
        </nav>
    );
};
export default Navbar;