import React from "react";
import Cube from "../components/Cube";
import Cube1 from "../components/Cube1";
import Cube2 from "../components/Cube2";
import Footer from "../components/Footer";
import Header from "../components/Header";

const Home = () => {
  return (
    <div>
      <Header />
      <Cube />
      <Cube1 />
      <Cube2 />
      <Footer />
    </div>
  );
};

export default Home;
