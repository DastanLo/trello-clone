import React from 'react';
import '../BoardForm/BoardForm.css';
import './Board.css';

const Board = ({title, remove, click, background, draggableProps, dragHandleProps, boardRef}) => {
  const classes = ['board-body'];
  if (background) {
    classes.push(background);
  }
    return (
        <div className={classes.join(' ')}
             onClick={click}
             ref={boardRef}
             {...dragHandleProps}
             {...draggableProps}>
            <div className="top-part">
                <h6 className="board-name">{title}</h6>
                <div className="remove-btn" onClick={remove}/>
            </div>
        </div>
    );
};

export default Board;
