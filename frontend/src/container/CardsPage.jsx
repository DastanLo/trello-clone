import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import Card from "../components/Card/CardComponent/Card";
import {createCard, getCard} from "../store/asyncActions/cardActions";
import {useParams} from "react-router-dom";
import AddTaskButton from "../components/Card/AddButton/AddTaskButton";
import Textarea from "../components/Card/Textarea/Textarea";

const CardsPage = () => {
	const [isClicked, setIsClicked] = useState(false);
	const [title, setTitle] = useState();
	const cards = useSelector(state => state.cards.cards)
	const dispatch = useDispatch();
	const {id} = useParams();

	const openTextarea = () => {
		setIsClicked(true)
	};
	const closeTextarea = () => {
		setIsClicked(false)
	};

	const inputChangeHandler = (e) => {
		console.log(e)
		setTitle(e.target.value)
	};

	const addCard = () => {
		const card = {
			board: id,
			title: title,
			tasks: [],
		}
		dispatch(createCard(card))
	}

	useEffect(() => {
		dispatch(getCard(id))
	}, [dispatch, id]);
	return (
		<div style={{display: 'flex'}}>
			{
				cards.map(card => (
					<Card title={card.title}/>
				))
			}
			<div style={{width: '242px', marginTop: '9px'}}>
				{isClicked ? <Textarea click={addCard} onChange={inputChangeHandler} style={{}} close={closeTextarea}/> :
					<AddTaskButton click={openTextarea} text="Добавить еще одну колону"/>}
			</div>

		</div>
	);
};

export default CardsPage;