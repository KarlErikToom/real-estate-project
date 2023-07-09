import React, { useState } from "react";

const PriceRangeSlider = ({ properties }) => {
  const [sliderValue, setSliderValue] = useState(1);

  const handleSliderChange = (event) => {
    setSliderValue(Number(event.target.value));
  };
  const [price, setPrice] = useState(properties);

  function priceFilter(event) {
    event.preventDefault();
    if (sliderValue) {
      setPrice(
        properties.filter((property) => property.listing_price <= sliderValue)
      );
    }
  }
  

 
  return (
    <div className="slideContainer">
      <h1>Property price:</h1>
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
        Max Price:{" "}
        <span className="value">{sliderValue.toLocaleString()}$</span>
      </p>
    </div>
  );
};

export default PriceRangeSlider;
