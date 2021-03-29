import React from 'react';
import Modal from "./components/UI/Modal/Modal";
import BoardForm from "./components/BoardForm/BoardForm";
import Card from "./components/Card/CardComponent/Card";

const App = () => {

	return (
		<div>
			<Modal show={false}>
				<BoardForm/>
			</Modal>
			<Card/>
		</div>
	);
};

export default App;

