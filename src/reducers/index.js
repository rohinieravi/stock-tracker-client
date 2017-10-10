import * as actions from '../actions';

const initialState = {
	companies: [{
		"AMZ":{
		name: "Amazon Inc.",
		price: "$961.35",
		change: "+5.00",
		units: 10,
		totalValue: "$9613.5"
	}
	},
	{
		"MSFT":{
		name: "Microsoft",
		price: "$74.49",
		change: "-3.00",
		units: 20,
		totalValue: "$1489.8"
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
	loggedIn: false
	
};

export const stockReducer = (state=initialState, action) => {
	if(action.type === actions.ADD_COMPANY) {
		const newCompany = {};
		newCompany[action.symbol]= {
			name: "new company",
			price: "$1234",
			change: "0.00",
			units: action.units,
			totalValue: (1234*action.units).toString()
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
	else if(action.type === actions.CHANGE_LOGIN_STATUS) {
		return Object.assign({}, state,{loggedIn: !state.loggedIn});
	}
	return state;
};