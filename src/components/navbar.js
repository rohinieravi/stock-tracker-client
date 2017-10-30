import React from 'react';
import {connect} from 'react-redux';
import {changeLoginStatus} from '../actions';
import {Link} from 'react-router-dom';
import './float-grid.css';


export function Navbar(props) {
	if(props.loggedIn) {
		return (
			<header>
			<div className="row">
			<div className="col-6 nav1">
				<h1><Link to="/userhome"><img id="logo" src="images/noun_1280144_cc.png"  alt="" />Stock Tracker</Link></h1>
			</div>
			<div className="col-6 nav2" >
				<h2><Link to="/" onClick={e => this.props.dispatch(changeLoginStatus())}>Log Out</Link></h2>
			</div>
			</div>
			</header>
		);
	}
	else {
		return(
			<header>
						<div className="row">
			<div className="col-6 nav1">

				<h1><Link to="/"><img id="logo" src="images/noun_1280144_cc.png"  alt="" />Stock Tracker</Link></h1>
							</div>
			<div className="col-6 nav2">

				<h2><Link to="/login">Login</Link></h2>
							</div>
			</div>

			</header>
		);
	}
}

const mapStateToProps = (state, props) => ({
    loggedIn: state.stock.currentUser !== null

})
export default connect(mapStateToProps)(Navbar);