import React, { useState } from "react";
import "./Overview.css";

const carImages = [
  "http://localhost:3019/img/bmw-i3.png",
  "http://localhost:3019/img/bmw-m5.png",
  "http://localhost:3019/img/bmw-m8.png",
  "http://localhost:3019/img/bmw-x3.png",
  "http://localhost:3019/img/dacia-spring.png",
  "http://localhost:3019/img/dodge-ram.png",
  "http://localhost:3019/img/ford-raptor.png",
  "http://localhost:3019/img/mazda-mx5.png",
  "http://localhost:3019/img/mercedes-glc.png",
  "http://localhost:3019/img/skoda-karoq.png",
  "http://localhost:3019/img/tesla-model3.png",
  "http://localhost:3019/img/tesla-modelX.png",
];

const Overview = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? carImages.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === carImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="overview">
      <div className="car-images">
        <div className="car-image">
          <img src={carImages[currentIndex]} alt={`Car ${currentIndex + 1}`} />
          <div className="navigation-buttons">
            <button onClick={handlePrev} className="nav-button">
              Previous
            </button>
            <button onClick={handleNext} className="nav-button">
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;
