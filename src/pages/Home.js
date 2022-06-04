import React from "react";
import Cube1 from "../components/Cube1";
import Cube2 from "../components/Cube2";
import Footer from "../components/Footer";
import HeaderCV from "../components/HeaderCV";
import MainHome from "../components/MainHome";

const Home = () => {
  return (
    <div>
      <HeaderCV />
      <div id="tourne">
        <Cube1 />
        <Cube2 />
      </div>
      <MainHome />
      <Footer />
    </div>
  );
};

export default Home;
