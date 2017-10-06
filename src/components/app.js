import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import LandingPage from './landingpage';
import HomePage from './userhomepage';
import AddCompany from './addCompany';
import './app.css';

export default function App(props) {
	return (
		<Router>
			<div>
				<nav>
					<header>
						<h1><Link to="/">Stock Tracker</Link></h1>
						<h2><Link to="/userhome">Login</Link></h2>
					</header>
				</nav>
				<main>
					<Route exact path="/" component={LandingPage} />
					<Route exact path="/userhome" component={HomePage} />
					<Route exact path="/addCompany" component={AddCompany} />
				</main>
				<footer></footer>
			</div>
		</Router>
	);
}