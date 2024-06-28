import React from "react";
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import '../styles/HeroBar.css'



type Photo = {
    title: string;
    src: string;
    alt: string;
};

const photos: Photo[] = [
    {
        title: 'New Season',
        src:'src/assets/images/Copy of card2.png',
        alt: 'Photo 1'
    },
    {
        title: 'The classics',
        src:'src/assets/images/Copy of card3.png',
        alt: 'Photo 2'
    },
    {
        title: 'Retro Styles',
        src:'src/assets/images/Copy of card4.png',
        alt: 'Photo 3'
    },
    // add more photo here if required

];
const HeroBar: React.FC = () => {
    return (
        <div className="hero-section">
        <Carousel showThumbs={false} infiniteLoop useKeyboardArrows autoPlay>
            {photos.map((photo,index) => (
                <div key={index} className="carousel-image-container">
                    <img src= {photo.src} alt={photo.alt}/>
                </div>
            ))}
        </Carousel>
        </div>
    );
};
export default HeroBar;