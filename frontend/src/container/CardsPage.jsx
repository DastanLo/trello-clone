import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import Card from "../components/Card/CardComponent/Card";
import {createCard, deleteCard, getCard} from "../store/asyncActions/cardActions";
import {useParams} from "react-router-dom";
import AddTaskButton from "../components/Card/AddButton/AddTaskButton";
import Textarea from "../components/Card/Textarea/Textarea";
import Spinner from '../components/UI/Spinner/Spinner';
import {DragDropContext, Draggable, Droppable} from 'react-beautiful-dnd';
import {onDragEndCard} from '../store/actions';

const CardsPage = () => {
	const [isClicked, setIsClicked] = useState(false);
	const [title, setTitle] = useState('');
	const loading = useSelector(state => state.card.loading);
	const cards = useSelector(state => state.card.cards)
	const dispatch = useDispatch();
	const {id} = useParams();

	const openTextarea = () => {
		setIsClicked(true)
	};
	const closeTextarea = () => {
		setIsClicked(false)
	};

	const inputChangeHandler = (e) => {
		setTitle(e.target.value)
	};

	const addCard = () => {
		const card = {
			board: id,
			title: title,
		}
		dispatch(createCard(card))
	}
	const onDragEnd = (result) => {
		const { destination, source, draggableId, type } = result;
		if (!result.destination) {
			return;
		}
		dispatch(onDragEndCard(source.droppableId,
			destination.droppableId,
			source.index,
			destination.index,
			draggableId,
			type));
	}
	useEffect(() => {
		dispatch(getCard(id))
	}, [dispatch, id]);
	return (
		<DragDropContext onDragEnd={onDragEnd}>
			<Droppable droppableId="cards" direction="horizontal" type="list">
				{
					(provided, snapshot) => (
						<div style={{display: 'flex'}} {...provided.droppableProps} ref={provided.innerRef}>
							{loading ? <Spinner/> : null}
							{
								cards.map((card, i) => (
									<Draggable key={card._id} draggableId={card._id} index={i}>
										{
											(provided) => (
												<Card key={card._id}
															id={card._id}
															boardId={id}
															tasks={card.tasks}
															dragref={provided.innerRef}
															draggableProps={provided.draggableProps}
															dragHandleProps={provided.dragHandleProps}
															remove={() => dispatch(deleteCard(card._id, id))}
															title={card.title}/>
											)
										}
									</Draggable>
								))
							}
							{provided.placeholder}
							<div style={{width: '242px', marginTop: '9px'}}>
								{isClicked ? <Textarea click={addCard}
																			 change={inputChangeHandler}
																			 close={closeTextarea}/> :
									<AddTaskButton click={openTextarea} text="Добавить еще одну колону"/>}
							</div>
						</div>
					)
				}
			</Droppable>
		</DragDropContext>
	);
};

export default CardsPage;
