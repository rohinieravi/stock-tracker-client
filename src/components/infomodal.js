import React from 'react';
import {deleteCompany, changeInfoModal} from '../actions';
import {connect} from 'react-redux';
import './infomodal.css';

export class InfoModal extends React.Component {

    //triggers the infomodal close
    onClose(event) {
        event.preventDefault();
        if (this.props.onClose) {
            this.props.onClose();
        }
    }

    //dispatches async action to delete company
    onDelete(event){
        event.preventDefault();
        this.props.dispatch(deleteCompany(this.props.company.symbol));
        this.props.dispatch(changeInfoModal());
        if (this.props.onDelete) {
            this.props.onDelete();
        }
    }

    render() {
        return (
            <div className="overlay" id="modal">
                <div className="content">
                    <h3>{`Are you sure you want to delete ${this.props.company.stockInfo.description}?`}</h3>
                    <div>                    
                    <a className="delete" href="" onClick={e => this.onDelete(e)}>Delete</a>
                    <a className="close" href="" onClick={e => this.onClose(e)}>Cancel</a>
                    </div>
                 </div>
            </div>
        );
    }
}

export default connect()(InfoModal);
