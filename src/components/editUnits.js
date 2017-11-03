import React from 'react';
import './app.css';
import Units from './units';
import {connect} from 'react-redux';
import {updateUnits} from '../actions';

export class EditUnits extends React.Component {
	
	//dispatches async action to update units
	onSubmit(e, symbol) {
		e.preventDefault();
		this.props.dispatch(updateUnits(symbol, this.noOfUnits.value));
		this.props.onCancel();
	}

	onCancel(){
		this.props.onCancel();
	}

	render() {
		const units = this.props.currentUser.stocks.filter(company => company.symbol === this.props.symbol)[0].units;	
		return (
			<div className="editUnits">
    			<form onSubmit={e=>this.onSubmit(e, this.props.symbol)}>
					<Units quantity={units} onAdd={input => this.noOfUnits = input} />
					<button>Save</button>
					<button onClick={e=>this.onCancel()}>Cancel</button>	
				</form>	
			</div>
		);
	}	
}

const mapStateToProps = (state, props) => {
	return state.stock;
}

export default connect(mapStateToProps)(EditUnits);