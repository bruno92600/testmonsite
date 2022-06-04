import React from "react";
import "../styles/Footer.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMailBulk, faImages, faHandshakeSimple } from '@fortawesome/free-solid-svg-icons'

const Footer = () => {
  return (
    <React.Fragment>
      <div className="footer">
        <div className="bullefooter">
        <a href="mailto:pascoal.goncalves.bruno@gmail.com">
          <p className="footer1"><FontAwesomeIcon className="iconefooter" icon={faMailBulk} />Contact</p>
        </a>
        </div>
        <div className="bullefooter">
        <a rel="noopener noreferrer" href="https://www.linkedin.com/in/bruno-pascoal-goncalves-082313222/" target="_blank">
          <p className="footer1"><FontAwesomeIcon className="iconefooter" icon={faHandshakeSimple} /> LinkedIn </p>
        </a>
        </div>
        <div className="bullefooter">
        <a rel="noopener noreferrer" href="https://twitter.com/bruno9260" target="_blank">
          <p className="footer1"><FontAwesomeIcon className="iconefooter" icon={faHandshakeSimple} /> Twitter </p>
        </a>
        </div>
        <div className="bullefooter">
        <a rel="noopener noreferrer" href="https://www.facebook.com/brunog2" target="_blank">
          <p className="footer1"><FontAwesomeIcon className="iconefooter" icon={faImages} /> Facebook </p>
        </a>
        </div>
        <div className="bullefooter">
        <a rel="noopener noreferrer" href="https://www.instagram.com/bru2305/?hl=fr" target="_blank">
          <p className="footer1"><FontAwesomeIcon className="iconefooter" icon={faImages} /> Instagram </p>
        </a>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Footer;
