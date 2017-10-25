import React from 'react';
import {connect} from 'react-redux';
import Company from './company';
import AddCompany from './addCompany';
import {fetchStockInfo} from '../actions';
import './app.css';
import Spinner from 'react-spinkit';


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
    	if(this.props.companies.length === 0){
	        this.setComment("No companies added.");
	    }	
   	    this.props.dispatch(fetchStockInfo());

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
		const companies = this.props.companies.map((company, index) => {
			if(this.props.stocks.length!==0) {
			const stockinfo = this.props.stocks.find(stock => stock.symbol === company.symbol);
			return (
				<Company key={index} index={index} stockInfo={stockinfo} onDelete={companyName => this.setComment(`Deleted ${companyName}`)}  {...company} />
			); 
			}
			return null;
		}
		);

		

		if(this.props.stocks.length === 0) {
			return (<Spinner name="three-bounce" />);
		}
		else{
			return (<ul className="companies">{companies}</ul>);
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


		return (
			<div className="home">
				<section>
        			<header>
          				<h3>My Stocks</h3>
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
    stocks: state.stock.companies,
    companies: state.stock.currentUser.stocks,
    isAdding: state.stock.isAdding
});

export default connect(mapStateToProps)(HomePage);