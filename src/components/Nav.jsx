import React from "react";
import { Link } from "react-router-dom";

function nav(){
    return(
        <nav>
            <div className="nav__container">
                <Link to={"/"} className="nav__logo">Homefy</Link>
                <ul className="nav__list">
                    <li className="nav__link"><Link to={"/"} className="nav__link--anchor">Home</Link></li>
                    <li className="nav__link"><a href="/#about" className="nav__link--anchor">About</a></li>
                    <li className="nav__link"><a href="/#featured" className="nav__link--anchor">Featured</a></li>
                    <li className="nav__link"><a href="#contact" className="nav__link--anchor">Contact</a></li>
                    <li className="nav__link "><Link to={"/properties"} className="nav__link--anchor nav__link--primary">Browse</Link></li>
                </ul>
            </div>
        </nav>
    )
}
export default nav