import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import LandingPage from './landingpage';
import HomePage from './userhomepage';
import Login from './login';
import Navbar from './navbar';
import './app.css';

export default function App(props) {
	return (
		<Router>
			<div>
				<nav>
					<Navbar />
				</nav>
				<main>
					<Route exact path="/" component={LandingPage} />
					<Route exact path="/userhome" component={HomePage} />
					<Route exact path="/login" component={Login} />
				</main>
			</div>
		</Router>
	);
}