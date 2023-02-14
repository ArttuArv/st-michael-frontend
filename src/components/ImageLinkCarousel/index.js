import React, { useState, useEffect } from "react";


const ImageLinkCarousel = ({images}) => {

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((currentImageIndex + 1) % images.length);
    }, 5000);
    return () => clearInterval(intervalId);
  }, [currentImageIndex, images.length]);

  return (
    <div>
      <img src={images[currentImageIndex].background} alt="test" />
    </div>
  );
};

export default ImageLinkCarousel;