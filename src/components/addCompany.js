import React from 'react';
import './app.css';
import Search from './search';
import Units from './units';
import {Link} from 'react-router-dom';

export default class AddCompany extends React.Component {
	addCompany() {

	}

	render() {
		return (
			<div className="addCompany">
				<Search onAdd={input => this.symbol = input}/>
				<Units quantity="1" onAdd={input => this.noOfUnits = input} />
				<button>Add</button>
				<button><Link to="/userhome">Cancel</Link></button>			
			</div>
		);	
	}
}