import React from 'react';
import ReactPlayer from 'react-player';
import '../styles/VideoPlay.css'

function VideoPlay() {

    const externalSource = 'https://www.youtube.com/watch?v=t3S91hF5ogA';

    const externalSource1 = 'https://www.youtube.com/watch?v=EvYl4u5kkyw';

    const externalSource2 = 'https://www.youtube.com/watch?v=bnVUHWCynig';

  return (
    <div className='video1'>
        <p className='titrevideo'> Beyoncé Mégamix </p>
        <div className='videoyou'>
        <ReactPlayer url={externalSource} />
        </div>
        <p className='titrevideo'> Offer nissim </p>
        <ReactPlayer url={externalSource1} />
        <p className='titrevideo'> Beyoncé halo </p>
        <ReactPlayer url={externalSource2} />
    </div>
  )
}

export default VideoPlay