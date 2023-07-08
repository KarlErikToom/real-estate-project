import React from "react";

function Home({ property }) {
  return (
    <div className="home">
      <figure className="home__img--wrapper">
        <a href="">
          <img className="home__img" src={property.image_url} alt="" />
        </a>
      </figure>
      <div className="home__name">
        <a href="/" className="home__name--link">
          {property.listing_name}
        </a>
      </div>
      <div className="home__description">
        <span className="home__price">{property.listing_price.toLocaleString()}$</span>
        <span className="home__bedrooms">{property.bedrooms} Bedrooms</span>
        <span className="home__bathrooms">{property.bathrooms} Bathrooms</span>
        <span className="home__garage">{property.garage_size} Garage</span>
      </div>
    </div>
  );
}

export default Home;
