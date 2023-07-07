import React, { useState } from "react";

const PriceRangeSlider = () => {
  const [sliderValue, setSliderValue] = useState(1);

  const handleSliderChange = (event) => {
    setSliderValue(Number(event.target.value));
  };

  let slider = document.querySelector("#myRange");
  let output = document.querySelector(".value");

  output.innerHTML = slider.value;
  slider.oninput = function () {
    output.innerHTML = this.value;
  };
  slider.addEventListener("mousemove", function () {
    let x = slider.value;
  });
  return (
    <div className="slideContainer">
      <input
        type="range"
        min={1}
        max={100}
        value={sliderValue}
        id="myRange"
        className="slider"
        onChange={handleSliderChange}
      />
      <p className="value__para">
        Value: <span className="value"></span>
      </p>
    </div>
  );
};

export default PriceRangeSlider;
