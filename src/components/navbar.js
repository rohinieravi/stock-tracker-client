import React from 'react';
import {connect} from 'react-redux';
import {changeLoginStatus} from '../actions';
import {Link} from 'react-router-dom';


export function Navbar(props) {
	if(props.loggedIn) {
		return (
			<header>
				<h1><Link to="/userhome">Stock Tracker</Link></h1>
				<h2><Link to="/" onClick={e => this.props.dispatch(changeLoginStatus())}>Log Out</Link></h2>
			</header>
		);
	}
	else {
		return(
			<header>
				<h1><Link to="/">Stock Tracker</Link></h1>
				<h2><Link to="/login">Login</Link></h2>
			</header>
		);
	}
}

const mapStateToProps = (state, props) => {
	return state.stock;

}
export default connect(mapStateToProps)(Navbar);