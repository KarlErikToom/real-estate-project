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
      <span className="home__price">{property.listing_price}</span>
    </div>
  );
}

export default Home;
