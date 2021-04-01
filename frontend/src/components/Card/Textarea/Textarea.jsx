import React from 'react';
import './Textarea.css'

const Textarea = ({close, click, change}) => {
	return (
		<div className="textarea-box">
			<textarea onChange={change} placeholder="Ввести заголовок для этой карточки" autoFocus/>
			<div className="textarea_buttons">
				<button onClick={click}>
					Добавить карточку
				</button>
				<div onClick={close} className="close_button-textarea">✕</div>
			</div>
		</div>
	);
};

export default Textarea;
