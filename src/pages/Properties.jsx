import React from "react";
import Home from "../components/ui/Home";

function Properties({ properties }) {
  return (
    <section id="properties">
      <div className="container">
        <div className="row">
          <form>
            <label>
              <input type="checkbox" name="option1" value="Option 1" />
              Option 1
            </label>
            <br />
            <label>
              <input type="checkbox" name="option2" value="Option 2" />
              Option 2
            </label>
            <br />
            <label>
              <input type="checkbox" name="option3" value="Option 3" />
              Option 3
            </label>
            <br />
            <label>
              <input type="checkbox" name="option4" value="Option 4" />
              Option 4
            </label>
          </form>
        </div>
      </div>
    </section>
    /* <>
    {properties.map((property) => (
        <Home property={property} key={property.id} />
        ))}
        </>*/
  );
}

export default Properties;
