import React from 'react';
import './app.css';
import Units from './units';
import {connect} from 'react-redux';
import {updateUnits} from '../actions';


export class EditUnits extends React.Component {
	
	onSubmit(e, symbol) {
		e.preventDefault();
		this.props.dispatch(updateUnits(symbol, this.noOfUnits.value));
		//this.props.history.push('/userhome');
		this.props.onCancel();
	}

	onCancel(){
		this.props.onCancel();
	}

	render() {
	
	const company = this.props.companies.filter(company => company.symbol === this.props.symbol)[0];
	const units = this.props.currentUser.stocks.filter(company => company.symbol === this.props.symbol)[0].units;	
	return (
			<div className="editUnits">
				
        			<form onSubmit={e=>this.onSubmit(e, company.symbol)}>
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