import React from "react";
import Estate from "../assets/estate.jpg";

function Landing() {
  return (
    <section id="landing">
      <div className="container">
        <div className="row">
          <div className="landing__wrapper">
            <div className="landing__left">
              <div className="landing__left--wrapper">
                <span className="landing__span">Real Estate Agency</span>
                <h1 className="landing__header">
                  Find the perfect home for <span className="pink">You</span>
                </h1>
                <p className="landing__para">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Beatae corporis nesciunt non nam odio qui porro dolores
                  dolorum eveniet quaerat.
                </p>
                <button className="btn">Find a Home</button>
              </div>
            </div>
            <div className="landing__right">
              <img className="landing__img" src={Estate} alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Landing;
