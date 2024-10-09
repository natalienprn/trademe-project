import './SlideShow.css'

import React, { useState } from 'react';
import IconArrowLeftWhite from '/icon/arrow-left-white-50.png';
import IconArrowRightWhite from '/icon/arrow-right-white-50.png';

interface SlideshowProps {
  images: string[];
}

const SlideShow: React.FC<SlideshowProps> = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleImageClick = (index: number) => {
    setCurrentImageIndex(index);
  };

  const handlePrevClick = () => {
    setCurrentImageIndex((prev) => (prev > 0 ? prev - 1 : images.length - 1));
  };

  const handleNextClick = () => {
    setCurrentImageIndex((prev) => (prev < images.length - 1 ? prev + 1 : 0));
  };

  return (
    <div className="gallery-container">
      <div className="photo-screen">
        <img loading='lazy'src={images[currentImageIndex]} alt={`Shop`} />
        <div className="navigation-arrows">
        <span className="arrow-left-big" onClick={handlePrevClick}>
          <img src={IconArrowLeftWhite}/>
        </span>
        <span className="arrow-right-big" onClick={handleNextClick}>
          <img src={IconArrowRightWhite}/>
        </span>
      </div>
      </div>
      <div className="photo-list">
        {images.map((image, index) => (
            <div className={index === currentImageIndex ? 'active-thumbnail' : 'thumbnail-wrapper'}>
          <img
          loading='lazy'
            key={index}
            src={image}
            alt={`Thumbnail ${index + 1}`}
            // className={index === currentImageIndex ? 'active-thumbnail' : ''}
            onClick={() => handleImageClick(index)}
          />
          </div>
        ))}
      </div>
      
    </div>
  );
};

export default SlideShow
