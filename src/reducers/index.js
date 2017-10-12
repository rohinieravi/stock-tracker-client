import * as actions from '../actions';

const initialState = {
	companies: [{
		"AMZ":{
		name: "Amazon Inc.",
		price: 961.35,
		change: "+5.00",
		units: 10,
	}
	},
	{
		"MSFT":{
		name: "Microsoft",
		price: 74.49,
		change: "-3.00",
		units: 20,
	}
	}],
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
	showInfoModal:false
	
};

export const stockReducer = (state=initialState, action) => {
	if(action.type === actions.ADD_COMPANY) {
		const newCompany = {};

		newCompany[action.symbol]= {
			name: state.allCompanies.filter(company => Object.keys(company)[0] === action.symbol)[0][action.symbol].name,
			price: 1234,
			change: "0.00",
			units: action.units,
		};
		console.log(newCompany);
		return Object.assign({}, state, {
			companies: [...state.companies,newCompany]
		});
	}
	else if(action.type === actions.UPDATE_UNITS) {
		let updatedCompany = state.companies.filter(company => Object.keys(company)[0] === action.symbol)[0];
		updatedCompany[action.symbol].units = action.units;
		return Object.assign({},state, {
			companies: state.companies.map(company =>
				company[Object.keys(company)[0]] === action.symbol?updatedCompany:company
			)
		})
	}
	else if(action.type === actions.SEARCH_COMPANY) {
		let options = state.allCompanies;
		return Object.assign({}, state, {options});
	}
	else if(action.type === actions.CLEAR_OPTIONS) {
		let options = [];
		return Object.assign({}, state, {options});
	}
	else if(action.type === actions.DELETE_COMPANY) {
		let companies = state.companies.filter(company => Object.keys(company)[0] !== action.symbol);
		console.log(companies);
		return Object.assign({}, state, {companies});
	}
	else if(action.type === actions.CHANGE_LOGIN_STATUS) {
		return Object.assign({}, state,{loggedIn: !state.loggedIn});
	}
	else if (action.type === actions.CHANGE_INFOMODAL) {
        return Object.assign({}, state, {
            showInfoModal: !state.showInfoModal
        });
    }
	return state;
};