import React from "react";
import { NavLink } from "react-router-dom";
import foto from "../photo-8/moi.jpg";

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
        <div className="photo">
          <img className="foto" src={foto} alt="moi" />
        </div>
      </div>
    </React.Fragment>
  );
};

export default Header;
