// src/components/Header.tsx

import React from 'react';
import '../styles/Header.css';
import Navbar from "../components/Navbar";
import UtilityBar from '../components/UtilityBar';


interface HeaderProps {
  logoSrc: string;
  logoAlt: string;
}

const Header: React.FC<HeaderProps> = ({ logoSrc, logoAlt }) => {
  return (
    <header className="header">
      <UtilityBar />
      <div className="logo-container">
        <img src={logoSrc} alt={logoAlt} className="logo" />
      </div>
        <Navbar />
      
    </header>
  );
};

export default Header;