import React from 'react';
import "../styles/Test.css"

import Game from "../components/Game"
import HeaderCV from "../components/HeaderCV"

const Test = () => {
    return (
        <div>
            <HeaderCV />
        <div className='zero'>
            <Game rows={20} columns={10} />
        </div>
        </div>
    );
};

export default Test;