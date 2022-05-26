import React from "react";
import foto from "../photo-8/IMG_0162.jpeg";
import "../styles/UserCV.css";

function UserCV() {
  return (
    <React.Fragment>
      <div className="user">
        <img id="use__avatar" src={foto} alt="moi" />
        <h1 className="user__name">Pascoal Goncalves Bruno</h1>
        <p className="user__profession">développeur web</p>
        <div className="user__infos">
          <p className="user__info">
          🏠  63 rue pierre joigneaux 92600 Asnières sur seine
          </p>
          <p className="user__info">
            <a href="tel:+0549139979">☎️  0649139979</a>
          </p>
          <p className="user__info">
            <a href="mailto:pascoal.goncalves.bruno@gmail.com">
            📩  pascoal.goncalves.bruno@gmail.com
            </a>
          </p>
          <p className="user__info">Date de naissance : 23 Mai 1983</p>
          <p className="user__info">Lieu de naissance : Mirandela - Portugal</p>
        </div>
      </div>
    </React.Fragment>
  );
}

export default UserCV;
