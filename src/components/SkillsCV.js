import React from "react";
import "../styles/SkillsCV.css";
import Skill from "./SkillCV";
import Interet from "./Interet";

function SkillsCV() {
  return (
    <>
      <div className="skills">
        <h2 className="h2">compétences</h2>
        <Skill title="HTML" rating="5" />
        <Skill title="CSS" rating="5" />
        <Skill title="JAVASCRIPT" rating="3" />
        <Skill title="REACT" rating="4" />
        <Skill title="NODE.JS" rating="4" />
      </div>
      <div className="skills">
        <h2 className="h2">Langues</h2>
        <Skill title="FRANÇAIS" rating="5" />
        <Skill title="PORTUGAIS" rating="5" />
        <Skill title="ANGLAIS" rating="3" />
        <Skill title="ESPAGNOL" rating="3" />
      </div>
      <Interet />
    </>
  );
}

export default SkillsCV;
