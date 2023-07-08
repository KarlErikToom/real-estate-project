import React, { useState } from "react";
import PriceRangeSlider from "../components/ui/PriceRangeSlider";
import Bedroom from "../components/ui/Bedroom";

function Properties({ properties }) {
  return (
    <section id="properties">
      <div className="container">
        <div className="row">
          <aside>
            <form className="properties__form">
              <h1>Property type:</h1>
              <label>
                <input className="properties__input" type="checkbox" value="APARTMENT" />
                Apartments
              </label>
              <br />
              <label>
                <input className="properties__input" type="checkbox" value="CONDOMINIUM" />
                Condominiums
              </label>
              <br />
              <label>
                <input className="properties__input" type="checkbox" value="TOWNHOUSE" />
                Townhouses
              </label>
              <br />
              <label>
                <input className="properties__input" type="checkbox" value="SINGLE_FAMILY" />
                Single Family Homes
              </label>
              <PriceRangeSlider />
              <Bedroom />
              <button type="submit" className="btn submit__btn">
                Search
              </button>
            </form>
          </aside>
        </div>
      </div>
    </section>
  );
}

export default Properties;
