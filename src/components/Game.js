import Menu from "./Menu"
import React from 'react';
import Tetris from "../components/Tetris"

import { useGameOver } from "../hooks/useGameOver";

const Game = ({ rows, columns }) => {

    const [gameOver, setGameOver, resetGameOver] = useGameOver();

    const start = () => resetGameOver();
    
    return (
        <div className='Game'>
            {gameOver ? (
                <Menu onClick={start} />
            ) : (
                <Tetris rows={rows} columns={columns} setGameOver={setGameOver} />
            )} 
        </div>
    )
}

export default Game;