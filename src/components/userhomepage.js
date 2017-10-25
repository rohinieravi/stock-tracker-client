import React from 'react';
import {connect} from 'react-redux';
import Company from './company';
import AddCompany from './addCompany';
import {fetchStockInfo} from '../actions';
import './app.css';
import Spinner from 'react-spinkit';
import {Redirect} from 'react-router-dom';



export class HomePage extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
      		isAddMode:false,
      		isLoading:false
    	}
	}

	componentWillReceiveProps(nextProps) {
		if(!nextProps.isAdding && this.props.isAdding){
		this.setLoading(false);
	    	this.props.dispatch(fetchStockInfo());
	    }
	    else {
	    	this.setLoading(true);
	    }
    }
    
    setLoading(isLoading) {
    	this.setState({
	    	isLoading
	    });
    }

    componentDidMount(){
    	if(this.props.user){ 
    		if(this.props.user.stocks.length === 0){
	        	this.setComment("No companies added.");
	    	}
	    	else{	
   	    		this.props.dispatch(fetchStockInfo());
   			}
   		}
    }

	setComment(comment){
		this.div.innerHTML = comment;
	}

	setAddMode(isAddMode) {
		this.setState({
			isAddMode
		});
	}

	renderCompany() {
		const companies = this.props.user.stocks.map((company, index) => {
			if(this.props.companies.length!==0) {
			const stockinfo = this.props.companies.find(stock => stock.symbol === company.symbol);
			return (
				<Company key={index} index={index} stockInfo={stockinfo} onDelete={companyName => this.setComment(`Deleted ${companyName}`)}  {...company} />
			); 
			}
			return null;
		}
		);

		

		if(this.props.companies.length === 0) {
			return (<Spinner name="three-bounce" />);
		}
		else{
			return (<div className="companies">{companies}</div>);
		}
	}

	renderAddCompany(){
		if(this.state.isAddMode) {
			return (<AddCompany onCancel={() => this.setAddMode(false)}/>);
		}
		else {
			return (<button onClick={e=>this.setAddMode(true)}>Add</button>)
		}
	}
	
	render() {

		if(!this.props.loggedIn) {
			return (<Redirect to="/" />);
		}
		return (
			<div className="home">
				<section>
        			<header>
          				<h3>{this.props.user.name}'s Stocks</h3>
        			</header>
        			<div className="comments" ref={div => this.div=div}></div>
        			{this.renderCompany()}
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