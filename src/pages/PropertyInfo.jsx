import React from "react";
import { properties } from "../data";
import { useParams } from "react-router-dom";

function PropertyInfo({}) {
  const { id } = useParams();
  const property = properties.find((property) => +property.id === +id);
  return (
    <section id="info">
      <div className="container">
        <div className="row">
          <div className="property__selected">
            <figure className="property__selected--figure">
              <img
                src={property.image_url}
                alt=""
                className="property__selected--img"
              />
            </figure>
            <div className="property__selected--description">
              <div className="property__type property__info">
                <h1 className="property__info--header">Type</h1>
                <span className="property__info--info">{property.property_type}</span>
              </div>
              <div className="property__price property__info">
                <h1 className="property__info--header">Price</h1>
                <span className="property__info--info">{property.listing_price.toLocaleString()}</span>
              </div>
              <div className="property__size property__info">
                <h1 className="property__info--header">Size</h1>
                <span className="property__info--info">{property.square_footage} sq ft</span>
              </div>
              <div className="property__location property__info">
                <h1 className="property__info--header">Location</h1>
                <span className="property__info--info">{property.location}</span>
              </div>
              <div className="property__bedrooms property__info">
                <h1 className="property__info--header">Bedrooms</h1>
                <span className="property__info--info">{property.bedrooms} bedrooms</span>
              </div>
              <div className="property__bathrooms property__info">
                <h1 className="property__info--header">Bathrooms</h1>
                <span className="property__info--info">{property.bathrooms} bathrooms</span>
              </div>
              <div className="property__garage property__info">
                <h1 className="property__info--header">Garage size</h1>
                <span className="property__info--info">{property.garage_size} garage</span>
              </div>
              <div className="property__year property__info">
                <h1 className="property__info--header">Year Built</h1>
                <span className="property__info--info">built in {property.year_built}</span>
              </div>
              <div className="property__summary property__info property__info--bottom">
                <h1 className="property__info--header">Summary</h1>
                <span className="property__info--info">{property.listing_name}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PropertyInfo;
