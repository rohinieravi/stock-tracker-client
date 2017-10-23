import * as actions from '../actions';
import {SET_AUTH_TOKEN, SET_CURRENT_USER} from '../actions/auth';
import {clearAuthToken} from '../local-storage';



const initialState = {
	companies: [],
	options:[],
	allCompanies: [{
		"TSLA": {
			name: "Tesla"
		}
	},{
		"EBAY": {
			name: "E-Bay"
		}
	},{
		"FB" : {
			name: "Facebook Inc."
		}
	}],
	loggedIn: false,
	showInfoModal:false,
	authToken: null, // authToken !== null does not mean it has been validated
    currentUser: null,
    error: null
	
};

export const stockReducer = (state=initialState, action) => {
	if(action.type === actions.ADD_COMPANY_SUCCESS) {
		console.log(action.data);
		return Object.assign({}, state, {
			currentUser: action.data
		});
	}
	else if(action.type === actions.ADD_COMPANY_ERROR) {
		
		return Object.assign({}, state, {
			error: action.error
		});
	}
	else if(action.type === actions.DELETE_COMPANY_SUCCESS) {
		console.log("in reducer");
		const stocks = state.currentUser.stocks.filter(stock => stock.symbol !== action.symbol);
		const currentUser = Object.assign({},state.currentUser,{stocks});
		const companies = state.companies.filter(stock =>  stock.symbol !== action.symbol);
		console.log(currentUser);
		console.log(companies);
		return Object.assign({}, state, {
			currentUser,
			companies
		});
	}
	else if(action.type === actions.DELETE_COMPANY_ERROR) {
		
		return Object.assign({}, state, {
			error: action.error
		});
	}
	else if(action.type === actions.UPDATE_UNITS_SUCCESS) {
		const stocks = state.currentUser.stocks.filter(stock => stock.symbol !== action.symbol);
		const updatedStock = state.currentUser.stocks.find(stock=>stock.symbol === action.symbol );
		updatedStock.units = action.units;
		const currentUser = Object.assign({},state.currentUser,{stocks: [...stocks, updatedStock]});
		console.log(currentUser);
		return Object.assign({}, state, {
			currentUser
		});
	}
	else if(action.type === actions.UPDATE_UNITS_ERROR) {
		
		return Object.assign({}, state, {
			error: action.error
		});
	}
	/*else if(action.type === actions.UPDATE_UNITS) {
		let updatedCompany = state.companies.filter(company => Object.keys(company)[0] === action.symbol)[0];
		updatedCompany[action.symbol].units = action.units;
		return Object.assign({},state, {
			companies: state.companies.map(company =>
				company[Object.keys(company)[0]] === action.symbol?updatedCompany:company
			)
		})
	}*/
	else if(action.type === actions.SEARCH_COMPANY) {
		let options = state.allCompanies;
		return Object.assign({}, state, {options});
	}
	else if(action.type === actions.CLEAR_OPTIONS) {
		let options = [];
		return Object.assign({}, state, {options});
	}
	/*else if(action.type === actions.DELETE_COMPANY) {
		let companies = state.companies.filter(company => Object.keys(company)[0] !== action.symbol);
		return Object.assign({}, state, {companies});
	}*/
	else if(action.type === actions.CHANGE_LOGIN_STATUS) {
		clearAuthToken(state.authToken);
		return Object.assign({}, state, {
			authToken: null,
			currentUser: null
		});
	}
	else if (action.type === actions.CHANGE_INFOMODAL) {
        return Object.assign({}, state, {
            showInfoModal: !state.showInfoModal
        });
    }
    if (action.type === SET_AUTH_TOKEN) {
        return Object.assign({}, state, {
            authToken: action.authToken
        });
    } else if (action.type === SET_CURRENT_USER) {
        return Object.assign({}, state, {
            currentUser: action.currentUser
        });
    }
    else if(action.type === actions.FETCH_STOCKINFO_SUCCESS) {
    	console.log(action.data);
    	const quote = action.data.quotes.quote;
    	
		return Object.assign({}, state, {
			companies: quote
		});
	}
	else if(action.type === actions.FETCH_STOCKINFO_ERROR) {
		
		return Object.assign({}, state, {
			error: action.error
		});
	}
	return state;
};