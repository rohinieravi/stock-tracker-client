import React from 'react';
import './app.css';
import {Link} from 'react-router-dom';
import {changeInfoModal} from '../actions';
import InfoModal from './infomodal';
import {connect} from 'react-redux';


export class Company extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      symbol:''
    }
  }

  toggleInfoModal(symbol) {
        this.setState({
          symbol: symbol
        });
        this.props.dispatch(changeInfoModal());
    }

    onDelete(){
      if(this.props.onDelete) {
        this.props.onDelete(this.props.name);
      }
    }

    renderInfoModal() { 
        if (this.props.showInfoModal && this.props.symbol === this.state.symbol) {
            return (<InfoModal company={this.props} onDelete={()=>this.onDelete()} onClose={() => this.toggleInfoModal()} />);
        }
        return null;
    }

  render() {
  	return (
  		<li>
        {this.renderInfoModal()}
  			<header>
          <h4>{this.props.name}</h4>
        </header>
        <div>Symbol: {this.props.symbol}</div>
        <div>Current price: {`$${this.props.price}`}</div>
        <div>Growth/Decline: {this.props.change}</div>
        <div>Number of Units: {this.props.units}</div>
        <div>Total Value: {`$${this.props.price*this.props.units}`}</div>
        <button><Link to={`/editUnits/${this.props.symbol}`}>Edit</Link></button>
        <button onClick={e => {e.preventDefault(); this.toggleInfoModal(this.props.symbol)}}>Delete</button>
  		</li>
  	);
  }
}

const mapStateToProps = (state, props) => ({
    showInfoModal: state.stock.showInfoModal
});

export default connect(mapStateToProps)(Company);