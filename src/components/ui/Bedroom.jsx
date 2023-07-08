import React, { useState } from "react";

function Bedroom() {
  const [minBedrooms, setMinBedrooms] = useState("");

  const handleMinBedroomsChange = (event) => {
    setMinBedrooms(event.target.value);
  };

  return (
    <div className="bedroom__container">
      <h1>Bedrooms:</h1>
      <div className="bedroom__filter">
        <label htmlFor="minBedrooms">Min:</label>
        <input
          type="number"
          id="minBedrooms"
          min={1}
          className="bedroom__min bedroom__input"
          value={minBedrooms}
          onChange={handleMinBedroomsChange}
        />
      </div>
    </div>
  );
}

export default Bedroom;
