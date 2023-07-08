import React, { useState } from "react";

const PriceRangeSlider = () => {
  const [sliderValue, setSliderValue] = useState(1);

  const handleSliderChange = (event) => {
    setSliderValue(Number(event.target.value));
  };

  return (
    <div className="slideContainer">
      <input
        type="range"
        min={200000}
        max={1000000}
        value={sliderValue}
        id="myRange"
        className="slider"
        onChange={handleSliderChange}
      />
      <p className="value__para">
        Max Price: <span className="value">{sliderValue.toLocaleString()}$</span>
      </p>
    </div>
  );
};

export default PriceRangeSlider;
