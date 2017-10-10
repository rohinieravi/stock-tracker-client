import React from 'react';
import './app.css';
import Units from './units';
import {connect} from 'react-redux';
import {updateUnits} from '../actions';

export class EditUnits extends React.Component {
	
	onSubmit(e, symbol) {
		e.preventDefault();
		this.props.dispatch(updateUnits(symbol, this.noOfUnits.value));
		this.props.history.push('/userhome');
	}

	render() {
	
	const company = this.props.companies.filter(company => Object.keys(company)[0] === this.props.match.params.symbol)[0];
	const symbol = Object.keys(company)[0];
	
		
	return (
			<div className="editUnits">
				<section>
         			<header>
          				<h3>Edit Stock Units</h3>
        			</header>
        			<form onSubmit={e=>this.onSubmit(e, symbol)}>
	        			<div>{company[symbol].name}</div>
						<Units quantity={company[symbol].units} onAdd={input => this.noOfUnits = input} />
						<button>Save</button>
					</form>	
				</section>		
			</div>
		);
	}	
}

const mapStateToProps = (state, props) => {
	return state.stock;

}
export default connect(mapStateToProps)(EditUnits);