import React from 'react';
import './app.css';
import {changeInfoModal} from '../actions';
import InfoModal from './infomodal';
import {connect} from 'react-redux';
import EditUnits from './editUnits';

export class Company extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      symbol:'',
      isEditing:false,
    }
  }

  //updates infomodal status 
  toggleInfoModal(symbol) {
    this.setState({
      symbol: symbol
    });
    this.props.dispatch(changeInfoModal());
  }

  onDelete(){
    if(this.props.onDelete) {
      this.props.onDelete(this.props.stockInfo.description);
    }
  }

  //renders Infomodal component
  renderInfoModal() { 
    if (this.props.showInfoModal && this.props.symbol === this.state.symbol) {
        return (<InfoModal company={this.props} onDelete={()=>this.onDelete()} onClose={() => this.toggleInfoModal()} />);
    }
    return null;
  }

  //sets and resets edit mode to display edit form accordingly
  setEditing(isEditing) {
    this.setState({
      isEditing
    });
  }

  //renders EditUnits component based on isEditing
  renderUnits() {
    if(this.state.isEditing) {
      return (<EditUnits symbol={this.props.symbol} onCancel={() =>this.setEditing(false)} />);
    }
    else {
      return (<div>Number of Units: {this.props.units}</div>);
    }
  }

  renderChange() {
    if(this.props.stockInfo.change>0){
       return (<div>Change: <span className="green">+{this.props.stockInfo.change}</span></div>)
    }
    else{
        return ( <div>Change: <span className="red">{this.props.stockInfo.change}</span></div>)

    }
  }

  render() {
    if(!this.props.stockInfo)  return null;
   
  	return (
  		<div className='company' >
        {this.renderInfoModal()}
  			<header>
          <h4>{this.props.stockInfo.description}</h4>
        </header>
        <div>Symbol: {this.props.symbol}</div>
        <div>Current price: {`$${this.props.stockInfo.last}`}</div>
        {this.renderChange()}
        {this.renderUnits()}
        <div>Total Value: {`$${(this.props.stockInfo.last*this.props.units).toFixed(2)}`}</div>
        <button onClick={e => this.setEditing(true)}>Edit</button>
        <button onClick={e => {e.preventDefault(); this.toggleInfoModal(this.props.symbol)}}>Delete</button>
  		</div>
  	);
  }
}

const mapStateToProps = (state, props) => ({
    showInfoModal: state.stock.showInfoModal
});

export default connect(mapStateToProps)(Company);