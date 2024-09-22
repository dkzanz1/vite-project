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
            {sectionData.map((section, index) => (
                <FooterSection key={index} title={section.title} items={section.items} />
            ))}
            <div className='footer-contact'>
                <h3>Have a Question?</h3>
                <p>
                    Contact us at:<br></br>
                    <a href="mailto:classicanya@questions.co.uk">classicanya@questions.co.uk</a>
                </p>
            </div>

            {/*other component go below*/}
            <p className='copyright'>© 2024 MyCompany. All rights reserved</p> 
        </footer>

    );
};
export default Footer;