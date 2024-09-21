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
        src:'src/assets/images/jeans.jpg',
        alt: 'Photo 1'
    },
    {
        title: 'The classics',
        src:'src/assets/images/bluejump.jpg',
        alt: 'Photo 2'
    },
    {
        title: 'On board',
        src:'src/assets/images/boatman.jpg',
        alt: 'Photo 3'
    },
    {
        title: 'Spread the word',
        src:'src/assets/images/mixedfive.jpg',
        alt: 'Photo 3'
    },
    {
        title: 'Urban styles ',
        src:'src/assets/images/fivekid.jpg',
        alt: 'Photo 3'
    },
    // add more photo here if required

];
const HeroBar: React.FC = () => {
    return (
        <div className="hero-section">
        <Carousel showThumbs={false} infiniteLoop useKeyboardArrows autoPlay>
            {photos.map((photo, index) => (
                <div key={index} className="carousel-image-container" style={{ backgroundImage: `url(${photo.src})`}}>
                    <img src= {photo.src} alt={photo.alt}/>
                    <div className="carousel-text">{photo.title}</div>
                </div>
            ))}
        </Carousel>
        </div>
    );
};
export default HeroBar;