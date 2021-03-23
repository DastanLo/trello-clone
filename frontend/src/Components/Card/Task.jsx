import React from 'react';
import './Task.css'

const Task = ({text}) => {
	return (
		<li>
			{text}
			<img src="/frontend/public/trashBin.png" alt=""/>
		</li>
	);
};

export default Task;