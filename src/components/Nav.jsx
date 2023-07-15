import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavHashLink } from "react-router-hash-link";

function Nav() {
  const menuLinkRef = useRef(null)
  function openMenu() {
    if (!menuLinksRef.current.classList.contains("open__menu")) {
      menuLinksRef.current.classList.add("open__menu");
    } else {
      menuLinksRef.current.classList.remove("open__menu");
    }
  }

  function closeMenu() {
    menuLinksRef.current.classList.remove("open__menu");
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
            <NavHashLink to={"/#about"} className="nav__link--anchor">
              About
            </NavHashLink>
          </li>
          <li className="nav__link">
            <NavHashLink
              to={"/#featured"}
              href="/#featured"
              className="nav__link--anchor"
            >
              Featured
            </NavHashLink>
          </li>
          <li className="nav__link">
            <NavHashLink to={"/#contact"} className="nav__link--anchor">
              Contact
            </NavHashLink>
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
        <ul className="nav__menu" ref={menuLinksRef}>
          <li className="menu__list" onClick={closeMenu}>
            <Link to={"/"} className="menu__link">
              Home
            </Link>
          </li>
          <li className="menu__list" onClick={closeMenu}>
            <NavHashLink to={"/#about"} className="menu__link">
              About
            </NavHashLink>
          </li>
          <li className="menu__list" onClick={closeMenu}>
            <NavHashLink to={"/#featured"} className="menu__link">
              Featured
            </NavHashLink>
          </li>
          <li className="menu__list" onClick={closeMenu}>
            <NavHashLink to={"/#contact"} className="menu__link">
              Contact
            </NavHashLink>
          </li>
          <li className="menu__list" onClick={closeMenu}>
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
