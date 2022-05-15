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
      </div>
    </React.Fragment>
  );
};

export default Header;
