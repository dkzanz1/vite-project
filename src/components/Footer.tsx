//src/components/Footer.tsx
import React from 'react';
import FooterSection from './FooterSection'; //imports dynamic section
import '../styles/Footer.css';

const Footer: React.FC = () => {
    const sectionData = [
        {
            title: 'Title heading here',
            items: [
                'Subheading 1 here',
                'Subheading 1 here',
                'Subheading 1 here',
                'Subheading 1 here',
                'Subheading 1 here',
                'Subheading 1 here',

            ]
        },
        {
            title: 'Title heading here',
            items: [
                'Subheading 1 here',
                'Subheading 1 here',
                'Subheading 1 here',
                'Subheading 1 here',
                'Subheading 1 here',
                'Subheading 1 here',

            ]
        },
        {
            title: 'Title heading here',
            items: [
                'Subheading 1 here',
                'Subheading 1 here',
                'Subheading 1 here',
                'Subheading 1 here',
                'Subheading 1 here',
                'Subheading 1 here',

            ]
        },  

    ]
    return (
        <footer className="footer">
            {sectionData.map((section, index)=>(
                <FooterSection key={index} title={section.title} items={section.items} />
            ))}
            <div className='footer-contact'>
                <h3>Have a Question?</h3>
                <p>
                    Contact us at: <a href="mailto:classicanya@questions.co.uk">classicanya@questions.co.uk</a>
                </p>
            </div>
            <h1>This is the footer please remove title once component complete</h1>
            {/*other component go below*/}
            <p>© 2024 MyCompany. All rights reserved</p>
        </footer>
    );
};
export default Footer;