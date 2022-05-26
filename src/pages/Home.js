import React from "react";
import Cube1 from "../components/Cube1";
import Cube2 from "../components/Cube2";
import Footer from "../components/Footer";
import Header from "../components/Header";
import MainHome from "../components/MainHome";

const Home = () => {
  return (
    <div>
      <Header />
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
