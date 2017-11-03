import * as actions from '../actions';
import {SET_AUTH_TOKEN, SET_CURRENT_USER} from '../actions/auth';
import {clearAuthToken} from '../local-storage';

const initialState = {
	companies: [],
	options:[],
	loggedIn: false,
	showInfoModal:false,
	authToken: null, 
    currentUser: null,
    error: null,
    isAdding: false
	
};

export const stockReducer = (state=initialState, action) => {
	if(action.type === actions.ADD_COMPANY_SUCCESS) {
		return Object.assign({}, state, {
			currentUser: action.data,
			isAdding: false
		});
	}
	else if(action.type === actions.ADD_COMPANY_ERROR) {
		return Object.assign({}, state, {
			error: action.error
		});
	}
	else if(action.type === actions.ADD_COMPANY_START) {
		return Object.assign({}, state, {
			isAdding: true
		});
	}
	else if(action.type === actions.DELETE_COMPANY_SUCCESS) {
		const stocks = state.currentUser.stocks.filter(stock => stock.symbol !== action.symbol);
		const currentUser = Object.assign({},state.currentUser,{stocks});
		const companies = state.companies.filter(stock =>  stock.symbol !== action.symbol);
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
		const stocks = state.currentUser.stocks;
		stocks.forEach(stock => {
			if(stock.symbol === action.symbol)
				stock.units = action.units;
		});
		const currentUser = Object.assign({},state.currentUser,{stocks});
		return Object.assign({}, state, {
			currentUser,
			isAdding: false
		});
	}
	else if(action.type === actions.UPDATE_UNITS_ERROR) {
		return Object.assign({}, state, {
			error: action.error
		});
	}
	else if(action.type === actions.SEARCH_COMPANY_SUCCESS) {
		let options = action.options.securities.security;
		if(!Array.isArray(options)) {
			options=[options];
		}
		return Object.assign({}, state, {
			options
		});
	}
	else if(action.type === actions.SEARCH_COMPANY_ERROR) {
		return Object.assign({}, state, {
			error: action.error
		});
	}
	else if(action.type === actions.CLEAR_OPTIONS) {
		let options = [];
		return Object.assign({}, state, {options});
	}
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
    } 
    else if (action.type === SET_CURRENT_USER) {
        return Object.assign({}, state, {
            currentUser: action.currentUser
        });
    }
    else if(action.type === actions.FETCH_STOCKINFO_SUCCESS) {
    	const quote = action.data.quotes.quote;
    	const stockInfo = Array.isArray(quote)?quote:[quote];
		return Object.assign({}, state, {
			companies: stockInfo
		});
	}
	else if(action.type === actions.FETCH_STOCKINFO_ERROR) {
		return Object.assign({}, state, {
			error: action.error
		});
	}
	return state;
};