import * as actions from '../actions';

const initialState = {
	companies: [{
		name: "Amazon Inc.",
		symbol: "AMZ",
		price: "$961.35",
		change: "+5.00",
		units: 10,
		totalValue: "$9613.5"
	},
	{
		name: "Microsoft",
		symbol: "MSFT",
		price: "$74.49",
		change: "-3.00",
		units: 20,
		totalValue: "$1489.8"
	}],
	options: ["Tesla", "Ebay"]
	
};

export const stockReducer = (state=initialState, action) => {
	if(action.type === actions.ADD_COMPANY) {
		return state;
	}
	return state;
};