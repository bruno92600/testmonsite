import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CV from "./pages/CV";
import Home from "./pages/Home";
import Photo from "./pages/Photo";
import Video from "./pages/Video";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CV />} />
        <Route path="/CV" element={<Home />} />
        <Route path="/photo" element={<Photo />} />
        <Route path="/video" element={<Video />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
