import Circle from './pomodoro-circle/Circle';
import ControlButtons from './pomodoro-circle/ControlButtons';
import SessionCounter from './pomodoro-circle/SessionCounter';

const PomodoroCircle = () => (
  <section>
    {/* Circle */}
    <Circle />
    {/* Control button  */}
    <ControlButtons />
    {/* Session counter  */}
    <SessionCounter />
  </section>
);

export default PomodoroCircle;
