import react from "react"
import { hasCollision, isWithinBoard } from "../business/Board"
import { rotate } from "../business/Tetrominoes"
import { Action } from "./Input";

const attemptRotation = ({ board, player, setPlayer }) => {
    const shape = rotate({
        piece: player.tetromino.shape,
        direction: 1
    });

    const position = player.position;
    const isValidRotation = 
       isWithinBoard({ board, position, shape }) &&
       !hasCollision({ board, position, shape });

       if (isValidRotation) {
        setPlayer({
            ...player,
            tetromino: {
                ...player.tetromino,
                shape
            }
        });
       } else {
        return false
       }
};

export const movePlayer = ({ delta, position, shape, board }) => {
    const desireNextPosition = {
        row: position.row + delta.row,
        column: position.column + delta.column
    };

    const collided = hasCollision({
        board,
        position: desireNextPosition,
        shape
    });

    const isOnBoard = isWithinBoard({
        board,
        position: desireNextPosition,
        shape
    });

    const preventMove = !isOnBoard || (isOnBoard && collided);
    const nextPosition = preventMove ? position : desireNextPosition;

    const isMovingDown = delta.row > 0;
    const isHit = isMovingDown && (collided || !isOnBoard);

    return { collided: isHit, nextPosition };
};


const attemptMovement = ({ board, action, player, setPlayer, setGameOver }) => {
    const delta = { row: 0, column: 0 };
    let isFastDropping = false;

    if (action === Action.FastDrop) {
        isFastDropping = true;
    } else if (action === Action.SlowDrop) {
        delta.row += 1;
    } else if (action === Action.Left) {
        delta.column -= 1;
    } else if (action === Action.Right) {
        delta.column += 1;
    }

    const { collided, nextPosition } = movePlayer({
        delta,
        position: player.position,
        shape: player.tetromino.shape,
        board
    });

    const isGameOver = collided && player.position.row === 0;
    if (isGameOver) {
        setGameOver(isGameOver);
    }

    setPlayer({
        ...player,
        collided,
        isFastDropping,
        position: nextPosition
    });
};

export const playerController = ({
    action,
    board,
    player,
    setPlayer,
    setGameOver
}) => {
    if (!action) return;

    if (action === Action.Rotate) {
        attemptRotation({ board, player, setPlayer });
    } else {
        attemptMovement({ board, player, setPlayer, action, setGameOver });
    }
};