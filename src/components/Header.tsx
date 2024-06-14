// src/components/Header.tsx

import React from 'react';
// import '../styles/Header.css'; // Optional: Import a CSS file for styling
import '../styles/Header.css';
import Navbar from "../components/Navbar";

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
        <Navbar />
    </header>
  );
};

export default Header;