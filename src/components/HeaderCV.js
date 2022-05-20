import React from "react";
import { NavLink } from "react-router-dom";

const HeaderCV = () => {
  return (
    <React.Fragment>
      <div className="accueil4">
        <nav>
          <div className="liste4">
            <NavLink to="/">
              <p>Accueil</p>
            </NavLink>
            <NavLink to="/CV">
              <p>Mon cv</p>
            </NavLink>
            <NavLink to="/photo">
              <p>Photo</p>
            </NavLink>
            <NavLink to="/video">
              <p>Video</p>
            </NavLink>
          </div>
        </nav>
      </div>
    </React.Fragment>
  );
};

export default HeaderCV;
