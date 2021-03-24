import React from 'react';
import './Board.css';
import CreateBoard from "../CreateBoard/CreateBoard";

const Board = ({name, click}) => {
    return (
    <div className="container">
        <div className="board-body">
            <div className="top-part">
                <h6 className="board-name">{name}</h6>
                <div className="remove-btn">{click}</div>
            </div>
        </div>
    </div>
    );
};

export default Board;
