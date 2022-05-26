import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/HeaderVideo.css";

const HeaderVideo = () => {
  return (
    <React.Fragment>
      <div className="accueil3">
        <nav>
          <div className="liste3">
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

export default HeaderVideo;
