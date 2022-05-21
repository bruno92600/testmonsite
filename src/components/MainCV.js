import React from "react";
import UserCV from "./UserCV";
import "../App.css";
import Skills from "../components/SkillsCV";
import Profil from "./ProfilCV";
import FormationsExperiences from "./FormationsExperiences";

const MainCV = () => {
  return (
    <div className="App">
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
  );
};

export default MainCV;
