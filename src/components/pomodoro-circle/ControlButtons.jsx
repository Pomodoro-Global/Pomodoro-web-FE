import RefreshBtn from './RefreshBtn';
import PlayBtn from './PlayBtn';
import StopBtn from './StopBtn';
import NextBtn from './NextBtn';

const ControlButtons = () => (
  <div className="border-2 my-4 flex justify-between items-center">
    {/* Refresh button */}
    <RefreshBtn />
    {/* Play/Stop button */}
    <PlayBtn />
    <StopBtn />
    {/* Next session button */}
    <NextBtn />
  </div>
);

export default ControlButtons;
