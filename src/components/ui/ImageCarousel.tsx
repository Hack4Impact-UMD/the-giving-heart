"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import { ArrowLeftCircle } from 'lucide-react';
import { ArrowRightCircle } from 'lucide-react';

const ImageCarousel = ( { images }: any ) => {
  const [currentImage, setCurrentImage] = useState(0);

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="carousel flex justify-between">
        <button>
        <ArrowLeftCircle
          className="p-2 text-[#ed1c24] w-10 h-10 my-auto ml-10 text-red-700 hover:text-slate-600"
          onClick={prevImage}
        > 
        </ArrowLeftCircle>
        </button>
      <div className="">
        <div className="mx-auto">
          <Image
            width={100}
            height={100}
            src={images[currentImage]}
            alt={`Image ${currentImage + 1}`}
            layout="responsive"
            className="mx-auto max-w-md max-h-40 md:max-w-xl md:max-h-80 border-0 border-slate-700 lg:max-h-96 " 
          />
        </div>
      </div>
      <button>
      <ArrowRightCircle
          className="p-2 text-[#ed1c24] w-10 h-10 my-auto mr-10 text-red-700 hover:text-slate-600"
          onClick={nextImage}
        >
      </ArrowRightCircle>
      </button>
    </div>
  );
};


export default ImageCarousel;
