import React from 'react';
import SignUpForm from './signup';
import './app.css';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';



export function LandingPage(props) {
	if (props.loggedIn) {
        return <Redirect to="/userhome" />;
    }
	return (
		<div className="landing">
			<section>
				 <header role="banner">
		      		<h1>The Stock Tracker</h1>
		      		<p>Now let's make some money...</p>
		    	</header>
	    	</section>
	    	<section>
	    		<header>
	      			<h3>What?</h3>
	    		</header>
	    		<p>Simply sign up for a free account and add in your stock units to your account to track their prices and analyze them. Remove your stock units once you sell them.</p>
	  		</section>
	  		<section>
	    		<header>
	      			<h3>Why?</h3>
	    		</header>
	    		<p>
	      			The Stock Tracker helps you watch all your stock units from a single place. This helps you compare the various stock units in hand and make a wise decision on which ones to sell by analyzing the trend of the stock prices.
	   			 </p>
	  		</section>
	  		<section>
	        	<header>
	          		<h3>How?</h3>
	        	</header>
		        <p>Go ahead and register below for your free account !</p>
	  			<SignUpForm />
	  		</section>
      	</div>
	);
}

const mapStateToProps = state => ({
    loggedIn: state.stock.currentUser !== null
});

export default connect(mapStateToProps)(LandingPage);