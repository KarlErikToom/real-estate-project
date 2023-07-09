import React, { useState } from "react";
import PriceRangeSlider from "../components/ui/PriceRangeSlider";
import Bedroom from "../components/ui/Bedroom";
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

    setFilteredProperties(filteredData);
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
                <PriceRangeSlider  />
                <Bedroom />
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
