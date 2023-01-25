import React from 'react';
import "../styles/Menu.css"

const Menu = ({ onClick }) => (
        <div className="Menu">
            <button className="Button" onClick={onClick}>
                Joue à Tetris
            </button>
        </div>
)

export default Menu;