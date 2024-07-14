import { useState } from 'react';
import Image from 'next/image';
import animationGif from './../../public/animation.gif';


const Score = () => {
    const [showGif,setShowGif] = useState(false);
    const [scoreText, setScoreText] =  useState("YourScore");

    const myFunction = () => {
        setShowGif(true);
        setScoreText("YAY YOU DID IT !!!")
    }

    return (
        <div className="score flex flex-col items-center justify-center p-4 bg-light-1 w-full rounded-2xl">
            <h1 id="scoreheader" className="text-3xl font-bold my-5">{scoreText}</h1>
            {showGif && <Image src={animationGif} alt="Animation" width={300} height={100} className='my-2' />}
            <p className="scorevalue text-2xl font-semibold">80</p>
            <button className="funcbutton mt-2 p-2 bg-blue-500 text-white rounded-full" onClick={myFunction}>🎉</button>
        </div>
    );
};

export default Score;
