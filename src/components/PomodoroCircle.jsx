import Circle from './pomodoro-circle/Circle';
import ControlButtons from './pomodoro-circle/ControlButtons';

const PomodoroCircle = () => (
  <section>
    {/* Circle */}
    <Circle />
    {/* Control button  */}
    <ControlButtons />
    {/* Session counter  */}
    <div className="border-2 flex justify-center items-center">
      <span>1</span>
      of
      <span>4</span>
      sessions
    </div>
  </section>
);

export default PomodoroCircle;
