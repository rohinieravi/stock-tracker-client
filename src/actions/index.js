import {API_BASE_URL} from '../config';
import {normalizeResponseErrors} from './utils';

export const addCompany = (symbol, units) => (dispatch, getState) => {
    const {authToken, currentUser} = getState().stock;
    const body = {
        	username: currentUser.username,
        	stock: {
        		symbol,
        		units
        	}
        };
        dispatch(addCompanyStart());
    return fetch(`${API_BASE_URL}/stocks/addCompany`, {
        method: 'PUT',
        headers: {
            // Provide our auth token as credentials
            Authorization: `Bearer ${authToken}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    })
        .then(res => normalizeResponseErrors(res))
        .then(res => res.json())
        .then((data) => dispatch(addCompanySuccess(data)))
        .catch(err => {
            dispatch(addCompanyError(err));
        });
};

export const ADD_COMPANY_START = 'ADD_COMPANY_START';
export const addCompanyStart = () => ({
	type:ADD_COMPANY_START
}) 

export const ADD_COMPANY_SUCCESS = 'ADD_COMPANY_SUCCESS';
export const addCompanySuccess = (data) => ({
    type: ADD_COMPANY_SUCCESS,
    data
});

export const ADD_COMPANY_ERROR = 'ADD_COMPANY_ERROR';
export const addCompanyError = (error) => ({
    type: ADD_COMPANY_ERROR,
    error
});

export const deleteCompany = (symbol) => (dispatch, getState) => {
    const {authToken, currentUser} = getState().stock;
    const body = {
        	username: currentUser.username,
        	symbol        	
        };
    return fetch(`${API_BASE_URL}/stocks/removeCompany`, {
        method: 'PUT',
        headers: {
            // Provide our auth token as credentials
            Authorization: `Bearer ${authToken}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    })
        .then(res => normalizeResponseErrors(res))
        .then(res => {
        	return dispatch(deleteCompanySuccess(symbol));
        })
        .catch(err => {
            dispatch(deleteCompanyError(err));
        });
};

export const DELETE_COMPANY_SUCCESS = 'DELETE_COMPANY_SUCCESS';
export const deleteCompanySuccess = (symbol) => ({
    type: DELETE_COMPANY_SUCCESS,
    symbol
});

export const DELETE_COMPANY_ERROR = 'DELETE_COMPANY_ERROR';
export const deleteCompanyError = (error) => ({
    type: DELETE_COMPANY_ERROR,
    error
});

export const updateUnits = (symbol, units) => (dispatch, getState) => {
    const {authToken, currentUser} = getState().stock;
    const body = {
        	username: currentUser.username,
        	symbol,
        	units      	
        };
        dispatch(addCompanyStart());
    return fetch(`${API_BASE_URL}/stocks/editUnits`, {
        method: 'PUT',
        headers: {
            // Provide our auth token as credentials
            Authorization: `Bearer ${authToken}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    })
        .then(res => normalizeResponseErrors(res))
        .then(res => {
        	return dispatch(updateUnitsSuccess(symbol, units));
        })
        .catch(err => {
            dispatch(updateUnitsError(err));
        });
};

export const UPDATE_UNITS_SUCCESS = 'UPDATE_UNITS_SUCCESS';
export const updateUnitsSuccess = (symbol, units) => ({
	type: UPDATE_UNITS_SUCCESS,
	symbol,
	units
});

export const UPDATE_UNITS_ERROR = 'UPDATE_UNITS_ERROR';
export const updateUnitsError = (error) => ({
    type: UPDATE_UNITS_ERROR,
    error
});

export const searchCompany = (name) => (dispatch, getState) => {
    const {authToken} = getState().stock;
    
    return fetch(`${API_BASE_URL}/stocks/search/${name}`, {
        method: 'GET',
        headers: {
            // Provide our auth token as credentials
            Authorization: `Bearer ${authToken}`,
            'Content-Type': 'application/json'
        }
    })
        .then(res => normalizeResponseErrors(res))
        .then(res => { 
        	return res.json()
        })
        .then((data) => {
        	console.log(data);
        	return dispatch(searchCompanySuccess(data));
        })
        .catch(err => {
            dispatch(searchCompanyError(err));
        });
};

export const SEARCH_COMPANY_SUCCESS ='SEARCH_COMPANY_SUCCESS';
export const searchCompanySuccess = (options) => ({
	type: SEARCH_COMPANY_SUCCESS,
	options
});

export const SEARCH_COMPANY_ERROR = 'SEARCH_COMPANY_ERROR';
export const searchCompanyError = (error) => ({
    type: SEARCH_COMPANY_ERROR,
    error
});

export const CLEAR_OPTIONS = 'CLEAR_OPTIONS';
export const clearOptions = () => ({
	type: CLEAR_OPTIONS
})

export const CHANGE_LOGIN_STATUS = 'CHANGE_LOGIN_STATUS'
export const changeLoginStatus = () => ({
	type: CHANGE_LOGIN_STATUS
});

/*export const DELETE_COMPANY = 'DELETE_COMPANY';
export const deleteCompany = (symbol) => ({
	type: DELETE_COMPANY,
	symbol
});*/

export const CHANGE_INFOMODAL = 'CHANGE_INFOMODAL';
export const changeInfoModal = () => ({
    type: CHANGE_INFOMODAL
});



export const FETCH_STOCKINFO_SUCCESS = 'FETCH_STOCKINFO_SUCCESS';
export const fetchStockInfoSuccess = (data) => ({
    type: FETCH_STOCKINFO_SUCCESS,
    data
});

export const FETCH_STOCKINFO_ERROR = 'FETCH_STOCKINFO_ERROR';
export const fetchStockInfoError = error => ({
    type: FETCH_STOCKINFO_ERROR,
    error
});

export const fetchquotes = () => (dispatch, getState) => {
	const {currentUser} = getState().stock;
	const stocks = currentUser.stocks;
    for(var i = 0 ; i < stocks.length ; i++){
    	dispatch(fetchStockInfo(stocks[i]));
    }
}

export const fetchStockInfo = () => (dispatch, getState) => {
	const {currentUser} = getState().stock;
	const stocks = currentUser.stocks;
	let symbols ='';
    for(var i = 0 ; i < stocks.length ; i++){
    	symbols += stocks[i].symbol;
    	if(i!== stocks.length-1){
    		symbols += ','
    	}
    }
    const {authToken} = getState().stock;
    return fetch(`${API_BASE_URL}/stocks/quotes/${symbols}`, {
        method: 'GET',
        headers: {
            // Provide our auth token as credentials
            Authorization: `Bearer ${authToken}`,
           	'Content-Type': 'application/json'
        }
    })
        .then(res => normalizeResponseErrors(res))
        .then(res => { 
        	return res.json()
        })
        .then((data) =>{ 
        	return dispatch(fetchStockInfoSuccess(data))
        })
        .catch(err => {
            dispatch(fetchStockInfoError(err));
        });
};
