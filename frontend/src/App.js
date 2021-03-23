import React from 'react';
import Modal from "./Components/UI/Modal/Modal";
import BoardForm from "./Components/BoardForm/BoardForm";
import Card from "./Components/Card/Card";

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

