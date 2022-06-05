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
import "../styles/Main.css";
import "../App.css";

const Main = () => {
  return (
    <React.Fragment>
      <div className="saut"></div>
      <h2 className="descriptfoto">Une de mes passions, la photo </h2>
      <p className="descriptfotos">Qu'en pensez vous ?</p>
      <div className="fotos">
          <img id="ecole" src={foto} alt="un collège a houilles" />
          <img id="ecole" src={fotoo} alt="un lampadaire dans le ciel" />
          <img id="ecole" src={fotooo} alt="branches de végétation" />
          <img id="ecole" src={fotoooo} alt="tulipe rouge" />
          <img id="ecole" src={foto1} alt="écriture sur un mur" />
          <img id="ecole" src={foto2} alt="ville de Porto vu de nuit" />
          <img id="ecole" src={foto3} alt="couché de soleil dans la ville de Porto" />
          <img id="ecole" src={foto4} alt="Musée des Tuileries à Paris" />
          <img id="ecole" src={foto5} alt="Vu sur le pont de la ville de Porto" />
          <img id="ecole" src={foto6} alt="Vu sur la rivière du Douro dans la ville de porto" />
          <img id="ecole" src={foto7} alt="Une feuille d'automne" />
          <img id="ecole" src={foto8} alt="La mer très calme dans des teintes irisée" />
          <img id="ecole" src={foto9} alt="Maison de pécheur" />
          <img id="ecole" src={foto10} alt="Cascade d'eau dans le Gérês au Portugal" />
          <img id="ecole" src={foto11} alt="Mouette volant au dessus de la mer" />
          <img id="ecole" src={foto12} alt="Église à étretat" />
        </div>
    </React.Fragment>
  );
};

export default Main;
