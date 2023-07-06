import React, { useState } from "react";
import Home from "./ui/Home";
import { properties as allProperties } from "../data";

function Featured() {
  const [properties, setProperties] = useState(allProperties);

  function filterProperty(filter) {
    console.log(filter);
    if (filter === "APARTMENT") {
      setProperties(
        allProperties.filter((property) => property.property_type === "Apartment")
      );
    }
    if (filter === "TOWNHOUSE") {
      setProperties(
        allProperties.filter((property) => property.property_type === "Townhouse")
      );
    }
    if (filter === "SINGLE_FAMILY") {
      setProperties(
        allProperties.filter(
          (property) => property.property_type === "Single Family Home"
        )
      );
    }
    if (filter === "CONDOMINIUM") {
      setProperties(allProperties.filter((property) => property.property_type === "Condominium"));
    }
  }

  return (
    <section id="featured">
      <div className="container">
        <div className="row">
          <h1 className="section__title">Our most viewed Homes</h1>
          <select
            id="filter"
            defaultValue="APARTMENT"
            onChange={(event) => filterProperty(event.target.value)}
          >
            <option value="APARTMENT">Apartments</option>
            <option value="TOWNHOUSE">Townhouses</option>
            <option value="SINGLE_FAMILY">Single Family Homes</option>
            <option value="CONDOMINIUM">Condominiums</option>
          </select>
          <div className="homes">
            {properties.slice(0, 3).map((property) => (
              <Home property={property} key={property.id} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Featured;
