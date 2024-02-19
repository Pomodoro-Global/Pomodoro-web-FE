const PomodoroCircle = () => {
  console.log('hi');
  return (
    <section>
      {/* Circle */}
      <div className="w-96 h-96 rounded-full flex justify-center items-center bg-gray-800">
        {/* Circle -- inside */}
        <div className="w-80 h-80 rounded-full flex flex-col justify-center items-center bg-white">
          {/* Timer */}
          <span className="font-black text-6xl">25:00</span>
          {/* Status */}
          <span className="font-bold">Status</span>
        </div>
      </div>
      {/* Control button  */}
      <div className="border-2 my-4 flex justify-between items-center">
        {/* Refresh button */}
        <button type="button">
          <img src="https://img.icons8.com/ios-glyphs/35/refresh--v1.png" alt="refresh--v1" />
        </button>
        {/* Play/Stop button */}
        <button type="button">
          <img src="https://img.icons8.com/ios/45/play-button-circled--v1.png" alt="play-button-circled--v1" />
          {/* <img src="https://img.icons8.com/ios/45/circled-pause.png" alt="circled-pause" /> */}
        </button>
        {/* Next session button */}
        <button type="button">
          <img src="https://img.icons8.com/external-others-zufarizal-robiyanto/45/external-controls-mutuline-audio-others-zufarizal-robiyanto-4.png" alt="external-controls-mutuline-audio-others-zufarizal-robiyanto-4" />
        </button>
      </div>
      {/* Session counter  */}
      <div className="border-2 flex justify-center items-center">
        <span>1</span>
        of
        <span>4</span>
        sessions
      </div>
    </section>
  );
};

export default PomodoroCircle;
