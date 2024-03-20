import React, { useState } from "react";

const TiltCard = () => {
  const [tiltX, setTiltX] = useState(0);
  const [tiltY, setTiltY] = useState(0);

  const handleMouseMove = (event) => {
    const boundingRect = event.target.getBoundingClientRect();
    const offsetX = event.clientX - boundingRect.left;
    const offsetY = event.clientY - boundingRect.top;
    const tiltAmountX = (offsetX - boundingRect.width / 2) / 10;
    const tiltAmountY = (offsetY - boundingRect.height / 2) / 10;
    setTiltX(tiltAmountX);
    setTiltY(-tiltAmountY); // Invert Y axis to match the typical direction of tilt
  };

  return (
    <div
      className="flex justify-center items-center h-screen"
      onMouseMove={handleMouseMove}
    >
      <div
        className="relative w-64 h-64 bg-white shadow-lg rounded-md overflow-hidden transform transition-transform"
        style={{
          transform: `perspective(1000px) rotateY(${tiltX}deg) rotateX(${tiltY}deg)`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-20"></div>
        <div className="absolute inset-0 flex flex-col justify-center items-center p-8 text-white">
          <h2 className="text-2xl font-bold mb-4">Card Title</h2>
          <p className="text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
            nec odio. Praesent libero. Sed cursus ante dapibus diam.
          </p>
          <button className="mt-6 px-4 py-2 bg-purple-500 hover:bg-purple-600 text-white font-semibold rounded">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default TiltCard;
