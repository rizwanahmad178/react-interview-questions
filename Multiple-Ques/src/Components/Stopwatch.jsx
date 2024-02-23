import React, { useState, useRef } from "react";

function Stopwatch() {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef(null);// useRef is used here to store and access the interval ID across renders, allowing us to control the timer's behavior effectively.

  const startTimer = () => {
    setIsRunning(true);
    intervalRef.current = setInterval(() => {
      setTime((prevTime) => prevTime + 1);
    }, 1000);
  };

  const pauseTimer = () => {
    setIsRunning(false);
    clearInterval(intervalRef.current);// stop the time from ticking
  };

  const resetTimer = () => {
    setTime(0);
    setIsRunning(false);
    clearInterval(intervalRef.current);
  };
  const formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60)
      .toString()
      .padStart(2, "0");// it is used to add 0 before the single digit if the length is less than 2 (ex: 02,04,03,05)
    const seconds = (timeInSeconds % 60).toString().padStart(2, "0");// otherwise 12,10,11 will be printed normally 
    return `${minutes}:${seconds}`;
  };
  return (
    <div>
      <h1>Stopwatch</h1>
      <div>{formatTime(time)}</div>
      {!isRunning ? (
        <button onClick={startTimer}>Start</button>
      ) : (
        <button onClick={pauseTimer}>Pause</button>
      )}
      <button onClick={resetTimer}>Reset</button>
    </div>
  );
}

export default Stopwatch;
