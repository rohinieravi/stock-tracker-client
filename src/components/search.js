import React from 'react';
import {connect} from 'react-redux';
import {searchCompany, clearOptions} from '../actions';

export class Search extends React.Component {
  /*constructor(props){
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
  }*/
  
    renderResults() {

    	
	        const results = this.props.options.map((option, index) => 
	        	<li key={index} onClick={e => this.onClick(e,option)} ><a href="">{option.description}</a></li>
	        );

	        return (
	            <ul className="search-results" ref={ul => this.list = ul}>
	                {results}
	            </ul>
	        );
   		
   		
    }

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
            <div className="search">
                
                <form>
                    <input type="search" placeholder="Search Company" ref={input => this.input = input} onChange={e => this.onChange(e)} />
                </form>
                
                {this.renderResults()}
               
            </div>
        );
    }
}

const mapStateToProps = state => ({
    options: state.stock.options
 });

export default connect(mapStateToProps)(Search);

