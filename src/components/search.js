import React from 'react';
import {connect} from 'react-redux';
import {searchCompany, clearOptions} from '../actions';
import './app.css';
import './float-grid.css';

export class Search extends React.Component {
   
  //renders the search results 
  renderResults() {
    let existingStocks = [];

    if(this.props.user && this.props.user.stocks.length !== 0){
      this.props.user.stocks.forEach(stock =>
        existingStocks.push(stock.symbol)
      )
    }
    const results = this.props.options.map((option, index) => {
      if(existingStocks.indexOf(option.symbol) === -1){
    	 return <div key={index} onClick={e => this.onClick(e,option)} ><a href="">{option.description}</a></div>
      }
      return null;
    });

    return (
      <div className="search-results dropdown-content" ref={div => this.list = div}>
        {results}
      </div> 
    );	
  }

  //adds the new Company
  onClick(event, option) {
  	event.preventDefault();
  	this.list.remove();
    this.props.dispatch(clearOptions());
  	this.input.value = option.description;
  	this.props.onAdd(option.symbol);
  }
  
  onChange(event) {
    event.preventDefault();
    const name = this.input.value.trim();
    if(name) {
      this.props.dispatch(searchCompany(name));
    }
    else{
    	this.props.dispatch(clearOptions());
    }
  }

  render() {
      return (
          <div className="search dropdown">
              <form autoComplete="off">
                  <input type="search" id="search" placeholder="Search Company" ref={input => this.input = input} onChange={e => this.onChange(e)} />
              </form>
              {this.renderResults()}
          </div>
      );
  }
}

const mapStateToProps = state => ({
    options: state.stock.options,
    user: state.stock.currentUser
 });

export default connect(mapStateToProps)(Search);

