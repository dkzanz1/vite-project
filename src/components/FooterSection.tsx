import React from 'react';

interface FooterSectionProps {
    title: string;
    items: string[];
}

const FooterSection: React.FC<FooterSectionProps> = ({ title, items }) => {
    return (
        <div className = "footer-section">
            <h3>{title}</h3>
            <ul>
                {items.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    );
};

export default FooterSection;

