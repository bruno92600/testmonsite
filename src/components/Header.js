import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <React.Fragment>
      <div className="accueil">
        <nav>
          <ul className="liste">
            <NavLink to="/">
              <li>Accueil</li>
            </NavLink>
            <NavLink to="/photo">
              <li>Photo</li>
            </NavLink>
            <NavLink to="/video">
              <li>Video</li>
            </NavLink>
          </ul>
        </nav>
        <div class="cube">
          <div class="side" id="front"></div>
          <div class="side" id="bottom"></div>
          <div class="side" id="top"></div>
          <div class="side" id="left"></div>
          <div class="side" id="right"></div>
          <div class="side" id="back"></div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Header;
