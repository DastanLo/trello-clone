import React, {useState} from 'react';
import CreateBoard from "../components/CreateBoard/CreateBoard";
import Board from "../components/Board/Board";
import Modal from "../components/UI/Modal/Modal";
import BoardForm from "../components/BoardForm/BoardForm";

const BoardsPage = () => {
    const [openModal, setOpenModal] = useState(false);
    const toggle = () => {
        setOpenModal(!openModal);
    }
    return (
        <div className="boards-container">
            <Modal show={openModal}>
                <BoardForm/>
            </Modal>
            <Board/>
            <CreateBoard click={toggle}/>
        </div>
    );
};

export default BoardsPage;