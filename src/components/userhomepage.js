import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import Company from './company';
import {fetchStockInfo} from '../actions';
import './app.css';



export class HomePage extends React.Component {


	/*componentWillMount() {
		
	    this.props.dispatch(fetchStockInfo());
	    setTimeout(()=>{}, 50000);
	    
		
    }*/
    constructor(props) {
    	super(props);
	    this.props.dispatch(fetchStockInfo());
    }
    
    componentDidMount(){
    	if(this.props.companies.length === 0){
	        this.setComment("No companies added.");
	    }	
    }

	setComment(comment){
		this.div.innerHTML = comment;
	}
	
	render() {


		const companies = this.props.companies.map((company, index) => {
			const stockinfo = this.props.stocks.find(stock => stock.symbol === company.symbol);
			console.log(stockinfo);
			return (
				<Company key={index} index={index} stockInfo={stockinfo} onDelete={companyName => this.setComment(`Deleted ${companyName}`)}  {...company} />
			); 

		}
		);
		if(companies.length === 0) {
			//this.setComment("No companies added.");
		}
		

		return (
			<div className="home">
				<section>
        			<header>
          				<h3>My Stocks</h3>
        			</header>
        			<div className="comments" ref={div => this.div=div}></div>
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
    stocks: state.stock.companies,
    companies: state.stock.currentUser.stocks
});

export default connect(mapStateToProps)(HomePage);