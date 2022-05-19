import React from "react";
import foto from "../photo-8/IMG_5022.jpg";
import fotoo from "../photo-8/IMG_5023.jpg";
import fotooo from "../photo-8/IMG_5024.jpg";
import fotoooo from "../photo-8/IMG_5029.jpg";
import foto1 from "../photo-8/IMG_5012.jpg";
import foto2 from "../photo-8/IMG_5039.jpg";
import foto3 from "../photo-8/IMG_5098.jpg";
import foto4 from "../photo-8/IMG_4025.jpg";
import foto5 from "../photo-8/IMG_5073.jpg";
import foto6 from "../photo-8/IMG_5074.jpg";
import foto7 from "../photo-8/IMG_5296.jpg";
import foto8 from "../photo-8/IMG_5341.jpg";
import foto9 from "../photo-8/IMG_5342.jpg";
import foto10 from "../photo-8/IMG_5443.jpg";
import foto11 from "../photo-8/IMG_5562.jpg";
import foto12 from "../photo-8/IMG_5556.jpg";

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
          <h3 className="titre">
            du coloré...
            <img
              className="ecole"
              src={fotoo}
              alt="un lampadaire dans le ciel"
            />
          </h3>
        </div>
        <div className="cinq">
          <h3 className="titre">
            de la végétation...
            <img className="ecole" src={fotooo} alt="végétation" />
          </h3>
          <h3 className="titre">
            des fleurs...
            <img className="ecole" src={fotoooo} alt="tulipe rouge" />
          </h3>
        </div>
        <div className="cinq">
          <h3 className="titre">
            ...
            <img className="ecole" src={foto1} alt="végétation" />
          </h3>
          <h3 className="titre">
            ...
            <img className="ecole" src={foto2} alt="tulipe rouge" />
          </h3>
        </div>
        <div className="cinq">
          <h3 className="titre">
            ...
            <img className="ecole" src={foto3} alt="végétation" />
          </h3>
          <h3 className="titre">
            ...
            <img className="ecole" src={foto4} alt="tulipe rouge" />
          </h3>
        </div>
        <div className="cinq">
          <h3 className="titre">
            ...
            <img className="ecole" src={foto5} alt="végétation" />
          </h3>
          <h3 className="titre">
            ...
            <img className="ecole" src={foto6} alt="tulipe rouge" />
          </h3>
        </div>
        <div className="cinq">
          <h3 className="titre">
            ...
            <img className="ecole" src={foto7} alt="végétation" />
          </h3>
          <h3 className="titre">
            ...
            <img className="ecole" src={foto8} alt="tulipe rouge" />
          </h3>
        </div>
        <div className="cinq">
          <h3 className="titre">
            ...
            <img className="ecole" src={foto9} alt="végétation" />
          </h3>
          <h3 className="titre">
            ...
            <img className="ecole" src={foto10} alt="tulipe rouge" />
          </h3>
        </div>
        <div className="cinq">
          <h3 className="titre">
            ...
            <img className="ecole" src={foto11} alt="végétation" />
          </h3>
          <h3 className="titre">
            ...
            <img className="ecole" src={foto12} alt="tulipe rouge" />
          </h3>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Main;
