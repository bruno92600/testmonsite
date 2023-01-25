import React from "react";
import UserCV from "./UserCV";
import "../App.css";
import Skills from "../components/SkillsCV";
import Profil from "./ProfilCV";
import FormationsExperiences from "./FormationsExperiences";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

const MainCV = () => {
const exportPDF = () => {
  const input = document.getElementById("App")
  html2canvas(input, {logging: true, letterRendering: 1, useCORS: true}).then(canvas => {
    const imgWidth = 208;
    const imgHeight = canvas.height * imgWidth / canvas.width;
    const imgData = canvas.toDataURL('img/png');
    const pdf = new jsPDF('p', 'mm', 'a4');
    pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);
    pdf.save("CVPGB.pdf");
  })
}

  return (
    <div className="App">
      <button className="bouton" onClick={() => exportPDF()}>CV PDF</button>
      <div id="App">
      <div className="grid_container">
        <div className="sidebar">
          <UserCV />
          <Skills />
        </div>
        <div className="main">
          <Profil />
          <FormationsExperiences />
        </div>
      </div>
      </div>
    </div>
  );
};

export default MainCV;
