import React, { useState } from "react";
import Home from "../components/ui/Home";

function Properties({ properties }) {
  const [isChecked, setIsChecked] = useState({
    APARTMENT: false,
    CONDOMINIUM: false,
    TOWNHOUSE: false,
    SINGLE_FAMILY: false,
  });
  const [filteredProperties, setFilteredProperties] = useState(properties);

  function handleOnChange(event) {
    const { value, checked } = event.target;
    setIsChecked((prevState) => ({
      ...prevState,
      [value]: checked,
    }));
  }
  function filterBox(event) {
    event.preventDefault();

    const filteredData = properties.filter((property) => {
      return (
        (isChecked.APARTMENT && property.property_type === "Apartment") ||
        (isChecked.CONDOMINIUM && property.property_type === "Condominium") ||
        (isChecked.TOWNHOUSE && property.property_type === "Townhouse") ||
        (isChecked.SINGLE_FAMILY &&
          property.property_type === "Single Family Home")
      );
    });
    const filteredPriceData = filteredData.filter(
      (property) => property.listing_price <= sliderValue
    );
    const filteredRoomData = filteredPriceData.filter(
      (property) => property.bedrooms >= minBedrooms
    );

    setFilteredProperties(filteredRoomData);
  }
  /*
SLIDER
*/
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
  /*
  BEDROOM
  */
  const [minBedrooms, setMinBedrooms] = useState([]);

  const handleMinBedroomsChange = (event) => {
    setMinBedrooms(event.target.value);
  };

  function filterRooms() {
    if (minBedrooms) {
      setMinBedrooms(
        properties.filter((property) => property.bedrooms >= minBedrooms)
      );
    }
  }

  return (
    <section id="properties">
      <div className="container">
        <div className="row">
          <div className="properties__wrapper">
            <aside>
              <form className="properties__form">
                <h1>Property type:</h1>
                <label>
                  <input
                    id="filter"
                    className="properties__input"
                    type="checkbox"
                    value="APARTMENT"
                    checked={isChecked.APARTMENT}
                    onChange={handleOnChange}
                  />
                  Apartments
                </label>
                <br />
                <label>
                  <input
                    id="filter"
                    className="properties__input"
                    type="checkbox"
                    value="CONDOMINIUM"
                    checked={isChecked.CONDOMINIUM}
                    onChange={handleOnChange}
                  />
                  Condominiums
                </label>
                <br />
                <label>
                  <input
                    id="filter"
                    className="properties__input"
                    type="checkbox"
                    value="TOWNHOUSE"
                    checked={isChecked.TOWNHOUSE}
                    onChange={handleOnChange}
                  />
                  Townhouses
                </label>
                <br />
                <label>
                  <input
                    id="filter"
                    className="properties__input"
                    type="checkbox"
                    value="SINGLE_FAMILY"
                    checked={isChecked.SINGLE_FAMILY}
                    onChange={handleOnChange}
                  />
                  Single Family Homes
                </label>
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
                    <span className="value">
                      {sliderValue.toLocaleString()}$
                    </span>
                  </p>
                </div>
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
                <button
                  type="submit"
                  onClick={filterBox}
                  className="btn submit__btn"
                >
                  Search
                </button>
              </form>
            </aside>
            <div className="properties">
              {filteredProperties.map((property) => (
                <Home property={property} key={property.id} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Properties;
