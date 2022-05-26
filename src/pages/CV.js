import React from "react";
import HeaderCV from "../components/HeaderCV";
import MainCV from "../components/MainCV";
import Footer from "../components/Footer";
import Loader from "../components/Loader";

const CV = () => {
  return (
    <div>
      <Loader />
      <HeaderCV />
      <MainCV />
      <Footer />
    </div>
  );
};

export default CV;
