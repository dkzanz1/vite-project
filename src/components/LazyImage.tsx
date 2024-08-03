import React from 'react';

interface LazyImageProps {
    src: string;
    alt: string;
}

const LazyImage: React.FC<LazyImageProps> = ({ src, alt }) => {
    return <img src={src} alt={alt} style={{ width: '60%', height: 'auto' }} />;
};

export default LazyImage;
