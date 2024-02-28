import { useState, useEffect } from 'react';

const Timer = () => {
  const [minutes, setMinutes] = useState(25);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    // handling seconds
    setTimeout(() => {
      if (seconds === 0) {
        setSeconds(59);
      } else {
        setSeconds(seconds - 1);
      }
    }, 1000);
    // handling minutes
    setTimeout(() => {
      setMinutes(minutes - 1);
    }, 1000 * 60);
  }, [seconds, minutes]);
  return (
    <div className="font-black text-6xl">
      <span>{minutes}</span>
      :
      <span>{seconds}</span>
    </div>
  );
};

export default Timer;
