import { useState } from 'react';
import Circle from './pomodoro-circle/Circle';
import ControlButtons from './pomodoro-circle/ControlButtons';
import SessionCounter from './pomodoro-circle/SessionCounter';

const PomodoroCircle = () => {
  const [playBtnStatus, setPlayBtnStatus] = useState(false);
  const handlePlayBtn = () => {
    setPlayBtnStatus(!playBtnStatus);
  };

  return (
    <section>
      <Circle />
      <ControlButtons playBtn={handlePlayBtn} />
      <SessionCounter />
    </section>
  );
};

export default PomodoroCircle;
