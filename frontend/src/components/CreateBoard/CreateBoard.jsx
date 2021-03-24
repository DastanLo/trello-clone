import React from 'react';
import './CreateBoard.css';

const CreateBoard = ({text, click}) => {
    return (
        <div>
            <div className="create-body">{click}
                <span className="create-button">{text}Create new board</span>
            </div>
        </div>
    );
};

export default CreateBoard;