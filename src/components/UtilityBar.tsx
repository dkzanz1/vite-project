import React from "react";
import '../styles/UtilityBar.css';




const UtilityBar: React.FC = () => {
    return (
        <div className="utility-bar">
            <a href="/cart" className="utility-item">🛒 Cart</a>
            <a href="/login" className="utility-item"> login</a>
        </div>
    );
};
export default UtilityBar;