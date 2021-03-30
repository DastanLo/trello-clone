import React from 'react';
import CreateBoard from "../components/CreateBoard/CreateBoard";
import Board from "../components/Board/Board";

const BoardsPage = () => {
    return (
        <div className="boards-container">
            <Board/>
            <CreateBoard/>
        </div>
    );
};

export default BoardsPage;
