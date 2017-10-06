import React from 'react';
import {connect} from 'react-redux';
import { Dropdown } from 'semantic-ui-react';

export class Search extends React.Component {

	render() {
		const Options = this.props.options;
		return(
		
		 <Dropdown
		    button
		    className='icon'
		    floating
		    labeled
		    icon='search'
		    options={Options}
		    search
		    text='Select Company'
		 />
		);
	}
}

const mapStateToProps = state => ({
    options: state.stock.options
});

export default connect(mapStateToProps)(Search);