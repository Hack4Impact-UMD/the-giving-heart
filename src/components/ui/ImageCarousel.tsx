"use client";
import React, { useState } from 'react';
import Image from 'next/image';

const ImageCarousel = ({ images }) => {
  const [currentImage, setCurrentImage] = useState(0);

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="relative">
      <button
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
        onClick={prevImage}
      >
        &lt;
      </button>
      <button
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
        onClick={nextImage}
      >
        &gt;
      </button>
      <div className="max-w-screen-xl mx-auto">
        <Image
          src={images[currentImage]}
          alt={`Image ${currentImage + 1}`}
          layout="responsive"
          width={1080}
          height={900}
          className="w-full max-w-6xl mx-auto"
        />
      </div>
    </div>
  );
};

export default ImageCarousel;
