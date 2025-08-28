// Implement a timmer with start, stop and reset button using react hooks
import React, { useState, useRef } from "react";

const Challenge = () => {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef(null);

  const handleStartClick = () => {
    if (!isRunning) {
      setIsRunning(true);
      intervalRef.current = setInterval(() => {
        setTime((prev) => prev + 1);
      }, 1000);
    }
  };

  const handleStepClick = () => {
    clearInterval(intervalRef.current);
    setIsRunning(false);
  };

  const handleResetClick = () => {
    clearInterval(intervalRef.current);
    setIsRunning(false);
    setTime(0);
  };

  const formatTime = (t) => {
    const hours = String(Math.floor(t / 3600)).padStart(2, "0");
    const minutes = String(Math.floor((t % 3600) / 60)).padStart(2, "0");
    const seconds = String(t % 60).padStart(2, "0");
    return `${hours}:${minutes}:${seconds}`;
  };

  return (
    <div className='flex items-center justify-center h-screen bg-black text-white'>
      <div className='flex flex-col items-center'>
        <h1 className='font-bold italic text-6xl'>TIMER/STOPWATCH</h1>
        <h2 className='mt-[1.25rem] text-4xl'>{formatTime(time)}</h2>
        <div className='flex gap-5 mt-[.625rem] text-2xl'>
          <button onClick={handleStartClick} className='bg-green-500 rounded-[.5rem] p-4'>Start</button>
          <button onClick={handleStepClick} className='bg-red-500 rounded-[.5rem] p-4'>Stop</button>
          <button onClick={handleResetClick} className='bg-yellow-500 rounded-[.5rem] p-4'>Reset</button>
        </div>
      </div>
    </div>
  );
};

export default Challenge;
