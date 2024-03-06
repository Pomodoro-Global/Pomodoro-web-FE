import Timer from './Timer';
import Status from './Status';

const Circle = () => (
  <div className="w-96 h-96 rounded-full flex justify-center items-center bg-gray-800">
    <div className="w-80 h-80 rounded-full flex flex-col justify-center items-center bg-white">
      <Timer />
      <Status />
    </div>
  </div>
);

export default Circle;
