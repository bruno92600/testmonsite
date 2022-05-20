import React from "react";
import { NavLink } from "react-router-dom";

const HeaderVideo = () => {
  return (
    <React.Fragment>
      <div className="accueil3">
        <nav>
          <div className="liste3">
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

export default HeaderVideo;
