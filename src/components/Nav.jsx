import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Nav() {
  function openMenu(){
    const menuLinks = document.querySelector(".nav__menu")
    menuLinks.classList.toggle("open__menu")
  }
  return (
    <nav>
      <div className="nav__container">
        <Link to={"/"} className="nav__logo">
          Homefy
        </Link>
        <ul className="nav__list">
          <li className="nav__link">
            <Link to={"/"} className="nav__link--anchor">
              Home
            </Link>
          </li>
          <li className="nav__link">
            <Link to={"/#about"} className="nav__link--anchor">
              About
            </Link>
          </li>
          <li className="nav__link">
            <a href="/#featured" className="nav__link--anchor">
              Featured
            </a>
          </li>
          <li className="nav__link">
            <a href="/real-estate-project#contact" className="nav__link--anchor">
              Contact
            </a>
          </li>
          <li className="nav__link ">
            <Link
              to={"/properties"}
              className="nav__link--anchor nav__link--primary"
            >
              Browse
            </Link>
          </li>
        </ul>
        <button onClick={openMenu} className="nav__menu--btn">
          <FontAwesomeIcon icon="bars" />
        </button>
        <ul className="nav__menu">
          <li className="menu__list">
            <Link to={"/"} className="menu__link">
              Home
            </Link>
          </li>
          <li className="menu__list">
            <a href="" className="menu__link">
              About
            </a>
          </li>
          <li className="menu__list">
            <a href="" className="menu__link">
              Featured
            </a>
          </li>
          <li className="menu__list">
            <a href="" className="menu__link">
              Contact
            </a>
          </li>
          <li className="menu__list">
            <Link to={"/properties"} className="menu__link">
              Browse
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
export default Nav;
