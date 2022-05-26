import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/HeaderCV.css";

const HeaderCV = () => {
  return (
    <React.Fragment>
      <div className="accueil4">
        <nav>
          <div className="liste4">
            <NavLink to="/">
            <p>Accueil CV</p>
            </NavLink>
            <NavLink to="/CV">
              <p>Mon monde...</p>
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
