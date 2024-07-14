import Card from './../Card/cards';
import event1 from './../../public/event1.jpg';
import event2 from './../../public/event2.jpg';
import event3 from './../../public/event3.jpg';
import event4 from './../../public/event4.jpg';

const Cards = () => {
    const cardData = [
        { thumbnail: event1, title: 'Event 1', description: 'Description: Lorem ipsum dolor sit amet...' },
        { thumbnail: event2, title: 'Event 2', description: 'Description: Lorem ipsum dolor sit amet...' },
        { thumbnail: event3, title: 'Event 3', description: 'Description: Lorem ipsum dolor sit amet...' },
        { thumbnail: event4, title: 'Event 4', description: 'Description: Lorem ipsum dolor sit amet...' },
    ];

    return (
        <div className="cards grid grid-cols-2 grid-rows-2 gap-2 bg-light-1 rounded-2xl p-5 ">
            {cardData.map((card, index) => (
                <Card key={index} {...card} />
            ))}
        </div>
    );
};

export default Cards;
