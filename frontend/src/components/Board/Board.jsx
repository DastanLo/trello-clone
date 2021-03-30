import React from 'react';
import './Board.css';

const Board = ({title, click, background}) => {
    return (
        <div className="board-body" style={{backgroundColor: background}}>
            <div className="top-part">
                <h6 className="board-name">{title}</h6>
                <div className="remove-btn" onClick={click}/>
            </div>
        </div>
    );
};

export default Board;
