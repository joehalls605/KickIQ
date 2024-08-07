// Timer component that defines the timer functionality and appearance

import React, { useEffect, useState } from 'react';
import countdown from '../Audio/countdown.wav';

const Timer = ({ setGameOver, gameOver }) => {
  const [secondsLeft, setSecondsLeft] = useState(30);
  const countdownTime = new Audio(countdown);

  useEffect(() => {
    let intervalId = null;

    if (secondsLeft > 0 && !gameOver) {
      intervalId = setInterval(() => {
        setSecondsLeft((prevSeconds) => prevSeconds - 1);
      }, 1000);
    } else {
      clearInterval(intervalId);
      setGameOver(true);
    }

    return () => {
      clearInterval(intervalId);
    };
  }, [secondsLeft, gameOver]);

  const progress = (secondsLeft / 30) * 100;

  // Determine the color of the timer bar based on remaining seconds
  let timerBarColor = 'bg-blue-500';
  if (secondsLeft <= 12) {
    timerBarColor = 'bg-orange-500';
  }
  if (secondsLeft <= 6) {
    timerBarColor = 'bg-red-500';
  }

  return (
    <div>
      <div className='flex flex-col items-center space-y-4 pt-8'>
        <div className='relative w-48 h-1 bg-gray-300'>
          <div
            className={`absolute top-0 left-0 h-full ${timerBarColor}`}
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>
      <div className='flex text-md justify-center p-4 '>
        {/* {secondsLeft} */}
      </div>
    </div>
  );
};

export default Timer;
