import React from 'react';
import './app.css';

export default function Units(props) {
	return(
		<div className="units">
			<label>Number of units</label>
			<input type="number" value={props.quantity} ref={input => props.onAdd(input)} />
		</div>
	);
}