import React from "react";
import { NavLink } from "react-router-dom";
import foto from "../photo-8/IMG_5022.jpg";
import fotoo from "../photo-8/IMG_5023.jpg";
import fotooo from "../photo-8/IMG_5024.jpg";
import fotoooo from "../photo-8/IMG_5029.jpg";

const Main = () => {
  return (
    <React.Fragment>
      <h1 className="descript">Quelques clichés... 📸</h1>
      <div className="fotos">
        <div className="quatre">
          <h3 className="titre">
            du noir et blanc...
            <img className="ecole" src={foto} alt="un collège a houilles" />
          </h3>
          <h3 className="titres">
            du coloré...
            <img
              className="lampadaire"
              src={fotoo}
              alt="un lampadaire dans le ciel"
            />
          </h3>
        </div>
        <div className="cinq">
          <h3>de la végétation...</h3>
          <img className="bois" src={fotooo} alt="végétation" />
          <h3>des fleurs...</h3>
          <img className="tulipe" src={fotoooo} alt="tulipe rouge" />
        </div>
        <nav>
          <NavLink to="/photo">
            <p className="lien">découvrez d'autres photos</p>
          </NavLink>
          <NavLink to="/video">
            <p className="liens">Quelques vidéo que j'affectionne</p>
          </NavLink>
        </nav>
      </div>
    </React.Fragment>
  );
};

export default Main;
