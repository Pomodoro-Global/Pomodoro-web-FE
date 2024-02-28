import { useState, useEffect } from 'react';

const Timer = () => {
  const [minutes, setMinutes] = useState(25);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    // handling seconds
    // const handleSeconds = () => {
    //   if (seconds === '00') {
    //     console.log('inside condition');
    //     for (let s = 59; s >= 0; s -= 1) {
    //       setTimeout(setSeconds(s) ,1000);
    //     }
    //   }
    // };
    // handleSeconds();
    setTimeout(() => {
      
    }, 1000);
    // handling minutes
  }, []);
  return (
    <div className="font-black text-6xl">
      <span>{minutes}</span>
      :
      <span>{seconds}</span>
    </div>
  );
};

export default Timer;
