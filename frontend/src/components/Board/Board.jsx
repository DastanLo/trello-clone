import React from 'react';
import './Board.css';

const Board = ({name, click, bgColor}) => {
    return (
        <div className="board-body" style={{backgroundColor: bgColor}}>
            <div className="top-part">
                <h6 className="board-name">{name}qweqweqwe</h6>
                <div className="remove-btn" onClick={click}></div>
            </div>
        </div>
    );
};

export default Board;