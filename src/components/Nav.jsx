import React from "react";

function nav(){
    return(
        <nav>
            <div className="nav__container">
                <a href="#" className="nav__logo">Homefy</a>
                <ul className="nav__list">
                    <li className="nav__link"><a href="" className="nav__link--anchor">Home</a></li>
                    <li className="nav__link"><a href="" className="nav__link--anchor">About</a></li>
                    <li className="nav__link"><a href="" className="nav__link--anchor">Services</a></li>
                    <li className="nav__link"><a href="" className="nav__link--anchor">Projects</a></li>
                    <li className="nav__link"><a href="" className="nav__link--anchor">Blog</a></li>
                    <li className="nav__link"><a href="" className="nav__link--anchor">Contact</a></li>
                    <li className="nav__link "><a href="" className="nav__link--anchor nav__link--primary">Free Quote</a></li>
                </ul>
            </div>
        </nav>
    )
}
export default nav