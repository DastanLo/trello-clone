import React from 'react';
import './AddTaskButton.css'

const AddTaskButton = ({text, click}) => {
	return (
		<div onClick={click} className="addTask">
			<span className="addText">{text}</span>
		</div>
	);
};

export default AddTaskButton;