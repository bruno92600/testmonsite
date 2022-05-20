import React from "react";
import UserCV from "./UserCV";

const MainCV = () => {
  return (
    <div className="App">
      <div className="grid_container">
        <div className="sidebar">sidebar</div>
        <UserCV />
        <div className="main">main</div>
      </div>
    </div>
  );
};

export default MainCV;
