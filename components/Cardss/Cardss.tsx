// Cards.tsx
import React from 'react';
import Card from './../Card/cards';

interface CardProps {
  thumbnail: string;
  title: string;
  description: string;
  url: string,
}

interface CardsProps {
  cardData: CardProps[];
}

const Cards: React.FC<CardsProps> = ({ cardData }) => {
  return (
    <div className="cards grid grid-cols-2 grid-rows-2 gap-2 bg-light-1 rounded-2xl p-5 ">
      {cardData.map((card, index) => (
        <Card key={index} {...card} />
      ))}
    </div>
  );
};

export default Cards;
