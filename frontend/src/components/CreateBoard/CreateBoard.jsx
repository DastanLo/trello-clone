import React from 'react';
import './CreateBoard.css';

const CreateBoard = ({click}) => {
    return (
        <div>
            <div className="create-body" onClick={click}>
                <span className="create-button">Создать новую доску</span>
            </div>
        </div>
    );
};

export default CreateBoard;
