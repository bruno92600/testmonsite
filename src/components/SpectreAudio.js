import React from 'react';
import AudioPlayer from "./AudioPlayer";
import tracks from "./tracks";
import HeaderCv from "./HeaderCV"
import Footer from "./Footer"

const SpectreAudio = () => {
  return (
    <div>
      <HeaderCv />
      <AudioPlayer tracks={tracks} />
      <Footer />
    </div>
  );
};

export default SpectreAudio;

