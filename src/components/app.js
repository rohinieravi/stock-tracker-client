import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import LandingPage from './landingpage';
import './app.css';

export default function App(props) {
	return (
		<Router>
			<div>
				<nav>
					<header>
						<h1><Link to="/">Stock Tracker</Link></h1>
						<h2><Link to="/">Login</Link></h2>
					</header>
				</nav>
				<main>
					<Route exact path="/" component={LandingPage} />
				</main>
				<footer></footer>
			</div>
		</Router>
	);
}