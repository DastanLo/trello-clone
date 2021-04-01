import React, {useEffect, useState} from 'react';
import CreateBoard from "../components/CreateBoard/CreateBoard";
import Modal from '../components/UI/Modal/Modal';
import BoardForm from '../components/BoardForm/BoardForm';
import {deleteBoard, getBoards} from '../store/asyncActions/boardActions';
import {useDispatch, useSelector} from 'react-redux';
import Board from '../components/Board/Board';
import Spinner from '../components/UI/Spinner/Spinner';
import {DragDropContext, Draggable, Droppable} from 'react-beautiful-dnd';
import {dragEndBoard} from '../store/actions';
import {useHistory} from "react-router-dom";

const BoardsPage = () => {
  const [open, setOpen] = useState(false);
  const user = useSelector(state => state.user.user);
  const boards = useSelector(state => state.board.boards);
  const loading = useSelector(state => state.board.loading);
  const dispatch = useDispatch();
  const history = useHistory();
  const openModal = () => {
    setOpen(true);
  }
  const closeModal = () => {
    setOpen(false);
  }
  const goToCardsPage = (id) => {
    history.push('/board/' + id)
  }
  const removeBoard = (id, e) => {
    e.stopPropagation();
    dispatch(deleteBoard(id, user._id))
  }
  const onDragEnd = (result) => {
    if (!result.destination) {
      return;
    }
    dispatch(dragEndBoard(result));
  }
  useEffect(() => {
    dispatch(getBoards(user._id));
  }, [dispatch, user._id]);
    return (
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="boardDroppable" direction="horizontal">
          {
            (provided, snapshot) => (
              <div className="boards-container"
                   ref={provided.innerRef}
                   {...provided.droppableProps}>
                {loading ? <Spinner/> : null}
                {
                  boards.map((board, i) => (
                    <Draggable key={board._id} draggableId={board._id} index={i}>
                      {(provided, snapshot) => (
                        <Board title={board.title}
                               remove={(e) => removeBoard(board._id, e)}
                               boardRef={provided.innerRef}
                               background={board.background}
                               dragHandleProps={provided.dragHandleProps}
                               draggableProps={provided.draggableProps}
                               click={() => goToCardsPage(board._id)}/>
                      )}
                    </Draggable>
                  ))
                }
                {provided.placeholder}
                <CreateBoard click={openModal}/>
                <Modal show={open} close={closeModal}>
                  <BoardForm close={closeModal}/>
                </Modal>
              </div>
            )
          }
        </Droppable>
      </DragDropContext>
    );
};

export default BoardsPage;
