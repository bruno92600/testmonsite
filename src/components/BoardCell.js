import React from 'react';
import "../styles/BoardCell.css"

const BoardCell = ({ cell }) => (
    <div className={`BoardCell ${cell.className}`}>
        <div className="Sparkle"></div>
    </div>
)

export default BoardCell;