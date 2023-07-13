import React from "react";
import AboutUs from "../assets/image2.avif";

function About() {
  return (
    <section id="about">
      <div className="container">
        <div className="row">
          <div className="about__wrapper">
            <div className="about__left">
              <img className="about__left--img" src={AboutUs} alt="" />
            </div>
            <div className="about__right">
              <div className="about__right--text">
                <span className="about__span">About Us</span>
                <h1 className="about__header">Who is Homefy</h1>
                <p className="about__para">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Cupiditate provident totam eius. Obcaecati ullam, ipsum ad id
                  sed, est quibusdam quo, magnam corrupti exercitationem
                  aliquid! Iusto corrupti sint debitis earum?
                </p>
              </div>
             
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
