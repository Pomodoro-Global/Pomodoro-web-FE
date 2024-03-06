import PropTypes from 'prop-types';
import RefreshBtn from './RefreshBtn';
import PlayBtn from './PlayBtn';
import StopBtn from './StopBtn';
import NextBtn from './NextBtn';

const ControlButtons = ({ playBtn }) => (
  <div className="border-2 my-4 flex justify-between items-center">
    {/* Refresh button */}
    <RefreshBtn />
    {/* Play/Stop button */}
    <PlayBtn statefn={playBtn} />
    <StopBtn />
    {/* Next session button */}
    <NextBtn />
  </div>
);

ControlButtons.propTypes = {
  playBtn: PropTypes.func.isRequired,
};

export default ControlButtons;
