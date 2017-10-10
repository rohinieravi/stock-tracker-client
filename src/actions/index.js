export const ADD_COMPANY = 'ADD_COMPANY';
export const addCompany = (symbol, units) => ({
    type: ADD_COMPANY,
    symbol,
    units
});

export const UPDATE_UNITS = 'UPDATE_UNITS';
export const updateUnits = (symbol, units) => ({
	type: UPDATE_UNITS,
	symbol,
	units
});

export const SEARCH_COMPANY ='SEARCH_COMPANY';
export const searchCompany = (name) => ({
	type: SEARCH_COMPANY,
	name
});

export const CHANGE_LOGIN_STATUS = 'CHANGE_LOGIN_STATUS'
export const changeLoginStatus = () => ({
	type: CHANGE_LOGIN_STATUS
});