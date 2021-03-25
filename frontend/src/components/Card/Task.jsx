import React from 'react';
import './Task.css'

const Task = ({text}) => {
	return (
		<li>
			{text}
			<img src="/trashBin.png" alt="trash"/>
		</li>
	);
};

export default Task;