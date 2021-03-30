import React from 'react';
import './Textarea.css'

const Textarea = ({click}) => {
	return (
		<div className="textarea-box">
			<textarea placeholder="Ввести заголовок для этой карточки" autoFocus/>
			<div className="textarea_buttons">
				<button>
					Добавить карточку
				</button>
				<div onClick={click} className="close_button-textarea">✕</div>
			</div>
		</div>
	);
};

export default Textarea;