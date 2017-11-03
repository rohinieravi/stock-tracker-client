import React from 'react';
import {connect} from 'react-redux';
import Company from './company';
import AddCompany from './addCompany';
import {fetchStockInfo} from '../actions';
import './app.css';
import {Redirect} from 'react-router-dom';
import FlipMove from 'react-flip-move';
import './float-grid.css';

export class HomePage extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
      		isAddMode:false,
      		isLoading:false,
      		comment:''
    	}
	}

	componentWillReceiveProps(nextProps) {

		//waits for add company to be completed before fetching stock info
		if(!nextProps.isAdding && this.props.isAdding){
			this.setComment("");
	    	this.props.dispatch(fetchStockInfo());
	    }
	    if(nextProps.user){ 
    		if(nextProps.user.stocks.length === 0){
	        	this.setComment("No companies added. Click on the '+' sign to add a company");
	    	}
	    }
    }
    
    //based on user stocks, appropriate rendering is done
    componentDidMount(){
    	if(this.props.user){ 
    		if(this.props.user.stocks.length === 0){
	        	this.setComment("No companies added. Click on the '+' sign to add a company");
	    	}
	    	else{	
	    		this.setComment("");
   	    		this.props.dispatch(fetchStockInfo());
   			}
   		}
    }

    //sets comment
	setComment(comment){
		this.setState({
			comment
		});
	}

	setAddMode(isAddMode) {
		this.setComment("");
		this.setState({
			isAddMode
		});
	}

	onDelete(companyName){
		if(this.props.user){ 
    		if(this.props.user.stocks.length === 0){
	        	this.setComment("No companies added. Click on the '+' sign to add a company");
	    	}
	    }
	}

	renderCompany() {
		const companies = this.props.user.stocks.map((company, index) => {
			if(this.props.companies.length!==0) {
				const stockinfo = this.props.companies.find(stock => stock.symbol === company.symbol);
				return (
					<Company key={index} index={index} stockInfo={stockinfo} onDelete={companyName => this.onDelete(companyName)}  {...company} />
				); 
			}
			return null;
		});
		return companies;
	}

	//renders add form based on isAddMode
	renderAddCompany(){
		if(this.state.isAddMode) {
			return (<AddCompany onCancel={() => this.setAddMode(false)}/>);
		}
		else {
			return (<button className="addButton" onClick={e=>this.setAddMode(true)}>+</button>)
		}
	}
	
	render() {

		//redirect to landing page if user is not logged in
		if(!this.props.loggedIn) {
			return (<Redirect to="/" />);
		}

		return (
			<div className="home">
				<section>
        			<header>
          				<h3>{this.props.user.name}'s Stocks</h3>
        			</header>
        			<div className="comments">{this.state.comment}</div>
        			<FlipMove duration={500} easing="ease-in-out">
        				{this.renderCompany()}
        			</FlipMove>
        			{this.renderAddCompany()}
        		</section>
			</div>
		);
	}
}

const mapStateToProps = state => ({
	user: state.stock.currentUser,
    companies: state.stock.companies,
    isAdding: state.stock.isAdding,
    loggedIn: state.stock.currentUser !== null
});

export default connect(mapStateToProps)(HomePage);