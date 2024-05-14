import React, { useState } from 'react';
import { IconButton, CardMedia } from '@mui/material';
import { NavigateBefore, NavigateNext } from '@mui/icons-material';

const Carousel = ({ images }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    setActiveIndex((prevActiveIndex) =>
      prevActiveIndex === 0 ? images.length - 1 : prevActiveIndex - 1
    );
  };

  const handleNext = () => {
    setActiveIndex((prevActiveIndex) =>
      (prevActiveIndex + 1) % images.length
    );
  };

  return (
    <div style={{ display: 'flex', alignItems: 'center' }} >
      <div>
        <IconButton onClick={handlePrev}>
          <NavigateBefore />
        </IconButton>
      </div><div>
        <CardMedia
          component="img"
          alt={images[activeIndex].alt}
          image={images[activeIndex].Url}
        />
      </div><div>
        <IconButton onClick={handleNext}>
          <NavigateNext />
        </IconButton>
      </div>
    </div >
  );
};

export default Carousel;