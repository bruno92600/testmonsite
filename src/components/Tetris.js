import React from 'react';
import "../styles/Tetris.css"
import Board from "../components/Board"
import GameController from './GameController';
import { useBoard } from "../hooks/useBoard"
import { useGameStats } from "../hooks/useGameStats"
import GameStats from "./GameStats"
import Previews from "../components/Previews"
import { usePlayer } from "../hooks/usePlayer"

const Tetris = ({ rows, columns, setGameOver }) => {
    const [gameStats, addLinesCleared] = useGameStats();
    const [player, setPlayer, resetPlayer] = usePlayer();
    const [board, setBoard] = useBoard({
         rows, 
         columns,
         player,
         resetPlayer,
         addLinesCleared, 
        })
    

    return (
        <div className="Tetris">
             <Board board={board} />
             <GameStats gameStats={gameStats} />
             <Previews tetrominoes={player.tetrominoes} />
             <GameController 
             board={board}
             gameStats={gameStats}
             player={player}
             setGameOver={setGameOver}
             setPlayer={setPlayer}
             />
        </div>
    )
};

export default Tetris;