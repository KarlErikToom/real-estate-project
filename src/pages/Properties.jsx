import React, { useState, useEffect, useRef } from "react";
import Home from "../components/ui/Home";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fa0 } from "@fortawesome/free-solid-svg-icons";

function Properties({ properties }) {
  const [isChecked, setIsChecked] = useState(() => {
    const savedFilters = localStorage.getItem("filters");
    return savedFilters
      ? JSON.parse(savedFilters)
      : {
          APARTMENT: false,
          CONDOMINIUM: false,
          TOWNHOUSE: false,
          SINGLE_FAMILY: false,
        };
  });
  const [filteredProperties, setFilteredProperties] = useState(() => {
    const savedProperties = localStorage.getItem("filteredProperties");
    return savedProperties ? JSON.parse(savedProperties) : properties;
  });

  function handleOnChange(event) {
    const { value, checked } = event.target;
    setIsChecked((prevState) => ({
      ...prevState,
      [value]: checked,
    }));
  }

  function filterBox(event) {
    event.preventDefault();

    let filteredData = properties;

    if (
      !isChecked.APARTMENT &&
      !isChecked.CONDOMINIUM &&
      !isChecked.TOWNHOUSE &&
      !isChecked.SINGLE_FAMILY
    ) {
      filteredData = properties;
    } else {
      filteredData = properties.filter((property) => {
        return (
          (isChecked.APARTMENT && property.property_type === "Apartment") ||
          (isChecked.CONDOMINIUM && property.property_type === "Condominium") ||
          (isChecked.TOWNHOUSE && property.property_type === "Townhouse") ||
          (isChecked.SINGLE_FAMILY &&
            property.property_type === "Single Family Home")
        );
      });
    }

    const filteredPriceData = filteredData.filter(
      (property) => property.listing_price <= sliderValue
    );
    const filteredRoomData = filteredPriceData.filter(
      (property) => property.bedrooms >= minBedrooms
    );

    asideRef.current.classList.toggle("open__aside");
    toggleBtnRef.current.classList.toggle("btn__rotate");

    setFilteredProperties(filteredRoomData);
    setCurrentPage(1);
  }

  const [sliderValue, setSliderValue] = useState(() => {
    const savedSliderValue = localStorage.getItem("sliderValue");
    const initalValue = savedSliderValue ? Number(savedSliderValue) : 10000;
    return savedSliderValue ? Number(savedSliderValue) : 1;
  });

  const handleSliderChange = (event) => {
    const newValue = Math.floor(Number(event.target.value) / 10000) * 10000;
    setSliderValue(newValue);
  };

  const [minBedrooms, setMinBedrooms] = useState(() => {
    const savedMinBedrooms = localStorage.getItem("minBedrooms");
    return savedMinBedrooms ? Number(savedMinBedrooms) : "";
  });

  const handleMinBedroomsChange = (event) => {
    setMinBedrooms(Number(event.target.value));
  };

  const [currentPage, setCurrentPage] = useState(() => {
    const savedPage = localStorage.getItem("currentPage");
    return savedPage ? Number(savedPage) : 1;
  });
  const propertiesPerPage = 3;

  useEffect(() => {
    localStorage.setItem("filters", JSON.stringify(isChecked));
    localStorage.setItem(
      "filteredProperties",
      JSON.stringify(filteredProperties)
    );
    localStorage.setItem("sliderValue", sliderValue);
    localStorage.setItem("minBedrooms", minBedrooms);
    localStorage.setItem("currentPage", currentPage);
  }, [isChecked, filteredProperties, sliderValue, minBedrooms, currentPage]);

  const startIndex = (currentPage - 1) * propertiesPerPage;
  const endIndex = startIndex + propertiesPerPage;
  const propertiesToShow = filteredProperties.slice(startIndex, endIndex);

  const handlePageClick = (pageNumber) => {
    if (pageNumber === currentPage) {
      return;
    }

    setCurrentPage(pageNumber);
  };

  const totalPages = Math.ceil(filteredProperties.length / propertiesPerPage);
  const pageNumbers = Array.from(
    { length: totalPages },
    (_, index) => index + 1
  );

  function resetFilters() {
    setIsChecked({
      APARTMENT: false,
      CONDOMINIUM: false,
      TOWNHOUSE: false,
      SINGLE_FAMILY: false,
    });
    setSliderValue(1000000);
    setMinBedrooms("");
  }
  const asideRef = useRef(null);
  const toggleBtnRef = useRef(null);
  function toggleFilter() {
    if (!asideRef.current.classList.contains("open__aside")) {
      asideRef.current.classList.add("open__aside");
    } else {
      asideRef.current.classList.remove("open__aside");
    }
    if (!toggleBtnRef.current.classList.contains("btn__rotate")) {
      toggleBtnRef.current.classList.add("btn__rotate");
    } else {
      toggleBtnRef.current.classList.remove("btn__rotate");
    }
  }

  return (
    <section id="properties">
      <button onClick={toggleFilter} className="aside__btn" ref={toggleBtnRef}>
        <FontAwesomeIcon
          icon="fa-solid fa-arrow-right"
          className="properties__arrow"
        />
      </button>
      <div className="container">
        <div className="row">
          <div className="properties__wrapper">
            <aside ref={asideRef}>
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
              <button onClick={resetFilters} className="reset__btn">
                Reset
              </button>
            </aside>
            <div className="properties">
              {propertiesToShow.length > 0 ? (
                propertiesToShow.map((property) => (
                  <Home property={property} key={property.id} />
                ))
              ) : (
                <p>No properties found.</p>
              )}
              <div className="pagination">
                {pageNumbers.map((pageNumber) => (
                  <button
                    className={`page__btn btn ${
                      pageNumber === currentPage ? "onpage" : ""
                    }`}
                    key={pageNumber}
                    onClick={() => handlePageClick(pageNumber)}
                  >
                    {pageNumber}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Properties;
