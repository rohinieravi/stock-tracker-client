import React from 'react';
import './app.css';
import Search from './search';
import Units from './units';
import {addCompany, clearOptions} from '../actions';
import {connect} from 'react-redux';


export class AddCompany extends React.Component {



	addComp(event) {
		event.preventDefault();

		this.props.dispatch(addCompany(this.symbol, this.noOfUnits.value));
		this.props.onCancel();

	}

	onCancel(event) {
		event.preventDefault();
		this.props.dispatch(clearOptions());
		this.props.onCancel();
	}

	
	render() {
		return (
			<div className="addCompany">
					
				<Search onAdd={input => this.symbol = input}/>
				<Units quantity="1" onAdd={input => this.noOfUnits = input} />
				<button onClick={e => this.addComp(e)}>Add</button>
				<button onClick={e => this.onCancel(e)}>Cancel</button>	
					
			</div>
		);	
	}
}

const mapStateToProps = (state, props) => {
	return state.stock;

}
export default connect(mapStateToProps)(AddCompany);