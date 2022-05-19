import React from "react";
import { NavLink } from "react-router-dom";

const HeaderFoto = () => {
  return (
    <React.Fragment>
      <div className="accueil">
        <nav>
          <div className="liste">
            <NavLink to="/">
              <p>Accueil</p>
            </NavLink>
            <NavLink to="/photo">
              <p>Photo</p>
            </NavLink>
            <NavLink to="/video">
              <p>Video</p>
            </NavLink>
          </div>
        </nav>
        <div id="box1">
          <div className="box">
            <h1 className="clic">Quelques clichés... 📸</h1>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default HeaderFoto;
