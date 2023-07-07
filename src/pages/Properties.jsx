import React from "react";
import PriceRangeSlider from "../components/ui/PriceRangeSlider";

function Properties({ properties }) {
  return (
    <section id="properties">
      <div className="container">
        <div className="row">
          <form>
            <label>
              <input type="checkbox" value="APARTMENT" />
              Apartments
            </label>
            <br />
            <label>
              <input type="checkbox" value="CONDOMINIUM" />
              Condominiums
            </label>
            <br />
            <label>
              <input type="checkbox" value="TOWNHOUSE" />
              Townhouses
            </label>
            <br />
            <label>
              <input type="checkbox" value="SINGLE_FAMILY" />
              Single Family Homes
            </label>
          </form>
          <PriceRangeSlider />
        </div>
      </div>
    </section>
  );
}

export default Properties;
