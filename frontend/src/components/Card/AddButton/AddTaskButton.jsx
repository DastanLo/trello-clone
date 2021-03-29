import React from 'react';
import './AddTaskButton.css'

const AddTaskButton = ({text}) => {
	return (
		<div className="addTask">
			<span className="addText">{text}</span>
		</div>
	);
};

export default AddTaskButton;