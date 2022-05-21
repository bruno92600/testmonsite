import React from "react";
import "../styles/cube.css";

const Cube = () => {
  return (
    <React.Fragment>
      <div id="carre">
        <div class="cube">
          <div class="side" id="front"></div>
          <div class="side" id="bottom"></div>
          <div class="side" id="top"></div>
          <div class="side" id="left"></div>
          <div class="side" id="right"></div>
          <div class="side" id="back"></div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Cube;
