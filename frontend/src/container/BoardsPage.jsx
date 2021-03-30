import React, {useEffect, useState} from 'react';
import CreateBoard from "../components/CreateBoard/CreateBoard";
import Modal from '../components/UI/Modal/Modal';
import BoardForm from '../components/BoardForm/BoardForm';
import {getBoards} from '../store/asyncActions/boardActions';
import {useDispatch, useSelector} from 'react-redux';
import Board from '../components/Board/Board';

const BoardsPage = () => {
  const [open, setOpen] = useState(false);
  const user = useSelector(state => state.user.user);
  const boards = useSelector(state => state.board.boards);
  const dispatch = useDispatch();
  const openModal = () => {
    setOpen(true);
  }
  const closeModal = () => {
    setOpen(false);
  }
  useEffect(() => {
    dispatch(getBoards(user._id));
  }, [dispatch, user._id])
    return (
        <div className="boards-container">
          {
            boards.map(board => {
              return <Board title={board.title}
                            background={board.background}
                            click={() => {}}/>
            })
          }
            <CreateBoard click={openModal}/>
          <Modal show={open} close={closeModal}>
            <BoardForm close={closeModal}/>
          </Modal>
        </div>
    );
};

export default BoardsPage;
