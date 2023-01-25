import React from 'react';
import "../styles/GameStats.css"

const GameStats = ({ gameStats }) => {
    const { level, points, linesCompleted, linesPerLevel } = gameStats;
    const linesToLevel = linesPerLevel - linesCompleted;

    return (
        <ul className="GameStats GameStats__right">
            <li>Niveau</li>
            <li className="value">{level}</li>
            <li>Niveau de ligne</li>
            <li className="value">{linesToLevel}</li>
            <li>Points</li>
            <li className="value">{points}</li>
        </ul>
    );
};

export default React.memo(GameStats);