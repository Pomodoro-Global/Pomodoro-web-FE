import PropTypes from 'prop-types';

const StopBtn = ({ statefn }) => (
  <button type="button" onClick={statefn}>
    <img src="https://img.icons8.com/ios/45/play-button-circled--v1.png" alt="play-button-circled--v1" />
  </button>
);

StopBtn.propTypes = {
  statefn: PropTypes.func.isRequired,
};

export default StopBtn;
