import React, { useState,useEffect } from "react";
import foto from '../Music/front-cover.jpeg'
import '../styles/MusicMain.css'

const moby = require('../Music/01-break-my-soul.mp3')
const Sound = new Audio(moby)


export default function Header()  {
  
  const [playInLoop, setPlayInLoop] = useState(false);

  useEffect(()=> {
    Sound.load();
  }, [])

  useEffect(() => {
    Sound.loop = playInLoop
  },[playInLoop])

  const playSound = () => {
    Sound.play();
  }

  const pauseSound = () => {
    Sound.pause();
  }

const stopSound = () => {
  Sound.pause();
  Sound.currentTime = 0;
}
 

  
    return (
        <div className="music1">
                    <h3 className="nomsong">Beyoncé</h3>
                    <p className="nomsong">Break my soul</p>
                    <img id="beyonce" src={foto} alt="couverture du single" />
                    <div className="boutonmusic">
                    <input
                    type='button'
                    className='playsong'
                    value="▶️"
                    onClick={playSound}/>
                    <input
                    type='button'
                    className='playsong'
                    value='⏸'
                    onClick={pauseSound}/>
                    <input
                    type='button'
                    className='playsong'
                    value='⏹'
                    onClick={stopSound}/>
                    </div>
                    <div className="repeatsong">
                    <label className="repeat1"><span className="repeat">repeat ?</span><input type='checkbox' checked={playInLoop} onChange={e => setPlayInLoop(e.target.checked)}/></label>
                    </div>
                  </div>
                  
    );
  
}