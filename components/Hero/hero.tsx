import React from 'react';
import Image, { StaticImageData } from "next/image";

interface HeroProps {
  scrollToSection: () => void;
  homeImage: string| StaticImageData; 
  arrowImage: string | StaticImageData; 
}

const Hero: React.FC<HeroProps> = ({ scrollToSection, homeImage, arrowImage }) => {
  return (
    <div className="relative h-450">
      <Image src={homeImage} alt='hero-image-background' className="absolute inset-0 w-full h-450 object-cover" />
      <h1 className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-7xl font-bold text-center">
        Welcome to Grows
        <p className="text-xl font-normal pt-5">Explore</p>
      </h1>
      <button
        onClick={scrollToSection}
        className="absolute top-1/3 left-1/2 transform -translate-x-1/2 mt-20"
      >
        <Image src={arrowImage} alt='arrow button' className="w-10 pt-5" />
      </button>
    </div>
  );
};

export default Hero;