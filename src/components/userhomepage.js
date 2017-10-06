import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import Company from './company';
import './app.css';

export class HomePage extends React.Component {

	render() {
		const companies = this.props.companies.map((company, index) =>
			<Company key={index} index={index} {...company} /> 
		);
		return (
			<div className="home">
				<section>
        			<header>
          				<h3>My Stocks</h3>
        			</header>
        			<ul>
        			{companies}
        			</ul>
        			<button><Link to="/addCompany"> Add </Link></button>
        		</section>
			</div>
		);
	}
}

const mapStateToProps = state => ({
    companies: state.stock.companies
});

export default connect(mapStateToProps)(HomePage);