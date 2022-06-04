import React from "react";
import foto from "../photo-8/IMG_0162.jpeg";
import "../styles/UserCV.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faPhone, faEnvelope, faArrowRight } from '@fortawesome/free-solid-svg-icons'

function UserCV() {
  return (
    <React.Fragment>
      <div className="user">
        <img id="use__avatar" src={foto} alt="moi" />
        <h1 className="user__name">Pascoal Goncalves Bruno</h1>
        <p className="user__profession">développeur web</p>
        <div className="user__infos">
          <p className="user__info">
          <FontAwesomeIcon className="iconeusercv" icon={faHome} /> 63 rue pierre joigneaux 92600 Asnières sur seine
          </p>
          <p className="user__info">
            <a href="tel:+0649139979"><FontAwesomeIcon className="iconeusercv" icon={faPhone} /> 0649139979</a>
          </p>
          <p className="user__info">
            <a href="mailto:pascoal.goncalves.bruno@gmail.com"><FontAwesomeIcon className="iconeusercv" icon={faEnvelope} />
               pascoal.goncalves.bruno@gmail.com
            </a>
            <p className="user_info">
              <a rel="noopener noreferrer" href="https://github.com/bruno92600" target="_blank"><FontAwesomeIcon className="iconeusercv" icon={faArrowRight} /> lien github </a>
            </p>
          </p>
          <p className="user__info">Date de naissance : 23 Mai 1983</p>
          <p className="user__info">Lieu de naissance : Mirandela - Portugal</p>
        </div>
      </div>
    </React.Fragment>
  );
}

export default UserCV;
