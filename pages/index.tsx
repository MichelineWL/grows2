// Pages.tsx
import React, { useEffect, useState } from 'react';
import { Navbar, Score, Hero, Cardss } from '../components';
import Herobg from './../public/Hero.jpg';
import Arrow from './../public/arrow.png';

interface CardProps {
  thumbnail: string;
  title: string;
  description: string;
  url: string;
}

export default function Pages() {
  const [cardData, setCardData] = useState<CardProps[]>([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('https://sistech-server.vercel.app/api/data');
        const json = await response.json();

        setCardData(
          json.data.map((item: any) => ({
            thumbnail: item.imgUrl,
            title: item.course,
            description: item.description,
            url: item.imgUrl,
          }))
        );
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    fetchData();
  }, []);

  const handleClick = () => {
    console.log('Button clicked!');
  };

  const scrollToSection = () => {
    const section = document.getElementById('cards-section');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <Navbar />
      <Hero scrollToSection={scrollToSection} homeImage={Herobg} arrowImage={Arrow} />

      <div id="cards-section" className="bg-primary-1 py-8">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 pt-0 mt-0">
          <div className="md:col-span-1 flex justify-center">
            <Score />
          </div>
          <div className="md:col-span-2">
            <Cardss cardData={cardData} />
          </div>
        </div>
      </div>
    </>
  );
}
