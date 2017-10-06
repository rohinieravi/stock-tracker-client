import React from 'react';
import './app.css';
import Units from './units';

export default function EditUnits(props) {
	return (
			<div className="editUnits">
				<Units quantity={props.quantity} onAdd={input => this.noOfUnits = input} />
				<button>Save</button>			
			</div>
		);	
}