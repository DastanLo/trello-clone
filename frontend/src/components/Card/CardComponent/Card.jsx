import React, {useState} from 'react';
import './Card.css'
import Task from "../TaskComponent/Task";
import AddTaskButton from "../AddButton/AddTaskButton.jsx";
import Textarea from "../Textarea/Textarea";
import {useDispatch} from 'react-redux';
import {createTask, deleteTask} from '../../../store/asyncActions/cardActions';
import {Draggable, Droppable} from 'react-beautiful-dnd';

const Card = ({title, remove, tasks, id, boardId, draggableProps, dragHandleProps, dragref}) => {
  const [isClicked, setIsClicked] = useState(false);
  const [taskTitle, setTaskTitle] = useState('');
  const dispatch = useDispatch();
  const inputChangeHandler = (e) => {
    setTaskTitle(e.target.value)
  };
  const addTask = () => {
    const task = {
      card: id,
      text: taskTitle
    }
    dispatch(createTask(task, boardId))
  }
  const openTextarea = () => {
    setIsClicked(true)
  };
  const closeTextarea = () => {
    setIsClicked(false)
  }
  const removeTask = (taskId) => {
    const task = {
      card: id,
      id: taskId,
    }
    dispatch(deleteTask(task, boardId));
  }
  return (
    <div className="card" ref={dragref} {...dragHandleProps} {...draggableProps}>
      <div className="title">
        <h1>{title}</h1>
        <div onClick={remove} className="deleteCard">✕</div>
      </div>
      <Droppable droppableId={id} type="card">
        {
          (provided) => (
            <div {...provided.droppableProps} ref={provided.innerRef}>
              {
                tasks.map((task, i) => {
                  return <Draggable key={task._id} draggableId={task._id} index={i}>
                    {
                      (provided) => (
                        <Task key={task._id}
                              text={task.text}
                              dragref={provided.innerRef}
                              draggableProps={provided.draggableProps}
                              dragHandleProps={provided.dragHandleProps}
                              remove={() => removeTask(task._id)}/>
                      )
                    }
                  </Draggable>

                })
              }
              {provided.placeholder}
              {isClicked ? <Textarea change={inputChangeHandler}
                                     click={addTask}
                                     close={closeTextarea}/> :
                <AddTaskButton click={openTextarea} text="Добавить карточку"/>}
            </div>
          )
        }
      </Droppable>
    </div>
  );
};

export default Card;
