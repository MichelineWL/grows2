import React, { useEffect, useState } from 'react';
import Cards from './Cardss/Cardss'; // Adjust the path as needed

interface CardProps {
  thumbnail: string;
  title: string;
  description: string;
  url: string;
}

const FetchFun = () => {
  const [data, setData] = useState<CardProps[]>([]);

  async function fetchData() {
    try {
      const response = await fetch('https://sistech-server.vercel.app/api/data');
      const json = await response.json();

      setData(
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

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="text-white">
      <Cards cardData={data} />
    </div>
  );
};

export default FetchFun;
