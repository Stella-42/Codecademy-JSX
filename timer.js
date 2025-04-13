import React, { useState, useEffect } from 'react';

export default function Timer() {
  const [time, setTime] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(prevTime => prevTime + 1);
    }, 1000);

    // Cleanup function to clear interval
    return () => clearInterval(intervalId);
  }, []); // Only run once on mount

  return (
    <>
      <h1>Time: {time}</h1>
    </>
  );
}
