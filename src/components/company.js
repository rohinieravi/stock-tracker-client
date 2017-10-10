import React from 'react';
import './app.css';
import {Link} from 'react-router-dom';

export default function Company(props) {

	return (
		<li>
			<header>
                <h4>{props.name}</h4>
             </header>
          <div>Symbol: {props.symbol}</div>
          <div>Current price: {props.price}</div>
          <div>Growth/Decline: {props.change}</div>
          <div>Number of Units: {props.units}</div>
          <div>Total Value: {props.totalValue}</div>
          <button><Link to={`/editUnits/${props.symbol}`}>Edit</Link></button>
          <button>Delete</button>
		</li>
	);

}