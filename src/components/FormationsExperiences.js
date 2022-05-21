import React from "react";
import "../styles/FormationsExperiences.css";
import dataFormations from "../data/FormationsCV";
import FormationsCV from "./FormationsCV";
import dataExperiences from "../data/ExperiencesCV";
import Experiences from "./Experiences";

const FormationsExperiences = () => {
  return (
    <>
      <FormationsCV datas={dataFormations} />
      <Experiences datas={dataExperiences} />
    </>
  );
};

export default FormationsExperiences;
