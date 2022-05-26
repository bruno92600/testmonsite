import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/Header.css";

const Header = () => {
  return (
    <React.Fragment>
      <div className="accueil">
        <nav>
          <div className="liste">
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
        <div className="descript">
          <h1>Bienvenue dans mon monde</h1>
          <br />
          <p>passionné par la photo, le web et bien plus...</p>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Header;
