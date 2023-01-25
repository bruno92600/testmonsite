import React from "react";
import "../styles/HeaderCV.css";
import { useState } from "react";
import { NavLink } from "react-router-dom";

const HeaderCV = () => {
  const [showLinks, setShowLinks] = useState(false);

  const handleShowLinks = () => {
    setShowLinks(!showLinks);
  };

  return (
    <React.Fragment>
    <nav className={`navbar ${showLinks ? "show-nav" : "hide-nav"}`}>
      <div className="navbar__logo"> @PGB </div>
      <ul className="navbar__links">
        <li className="navbar__item slideInDown-1">
          <NavLink to="/" className="navbar__link">
            Accueil/CV
          </NavLink>
        </li>
        <li className="navbar__item slideInDown-2">
          <NavLink to="/CV" className="navbar__link">
            Passions...
          </NavLink>
        </li>
        <li className="navbar__item slideInDown-3">
          <NavLink to="/photo" className="navbar__link">
            Photos
          </NavLink>
        </li>
        <li className="navbar__item slideInDown-4">
          <NavLink to="/video" className="navbar__link">
            Vidéo
          </NavLink>
        </li>
        <li className="navbar__item slideInDown-4">
          <NavLink to="/essaie" className="navbar__link">
            music
          </NavLink>
        </li>
        <li className="navbar__item slideInDown-4">
          <NavLink to="/meteo" className="navbar__link">
            Météo
          </NavLink>
        </li>
        <li className="navbar__item slideInDown-4">
          <NavLink to="/test" className="navbar__link">
           test
          </NavLink>
        </li>
        <li className="navbar__item slideInDown-5">
          <a href="mailto:pascoal.goncalves.bruno@gmail.com" className="navbar__link">
            Contact
          </a>
        </li>
      </ul>
      <button className="navbar__burger" onClick={handleShowLinks}>
        <span className="burger-bar"></span>
      </button>
    </nav>
    </React.Fragment>
  );
};

export default HeaderCV;
