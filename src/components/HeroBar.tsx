import React from 'react';
import '../styles/HeroBar.css';


const HeroBar:React.FC = () => {
    return (
  /*bring a photo or gallery to fill the whole space*/
        <section className="hero-bar">
            <div className="hero-content">
                <h2 className="hero-heading">New Season</h2>
                <h2 className="hero-heading">The classics</h2>
                <h2 className="hero-heading">Retro Styles</h2>
            </div>
            <div className="photo=gallery"> 
                <div className="gallery-scroll">
                    <img src="src/assets/images/Copy of card2.png" className="gallery-image"/>
                    <img src="src/assets/images/Copy of card3.png" className="gallery-image"/>
                    <img src="src/assets/images/Copy of card4.png" className="gallery-image"/>
                </div>
            </div>
        </section>
        );
    };
  


export default HeroBar;