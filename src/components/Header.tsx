// src/components/Header.tsx

import React from 'react';
// import './Header.css'; // Optional: Import a CSS file for styling

interface HeaderProps {
  logoSrc: string;
  logoAlt: string;
}

const Header: React.FC<HeaderProps> = ({ logoSrc, logoAlt }) => {
  return (
    <header className="header">
      <div className="logo-container">
        <img src={logoSrc} alt={logoAlt} className="logo" />
      </div>
      <nav className="secondary-navbar">
        <ul>
          <li><a href="/link1">Link 1</a></li>
          <li><a href="/link2">Link 2</a></li>
          <li><a href="/link3">Link 3</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;