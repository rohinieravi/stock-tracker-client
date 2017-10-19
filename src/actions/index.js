import {API_BASE_URL} from '../config';
import {normalizeResponseErrors} from './utils';

export const addCompany = (symbol, units) => (dispatch, getState, symbol, units) => {
    const {authToken, currentUser} = getState().stock;

    return fetch(`${API_BASE_URL}/stocks/addCompany`, {
        method: 'PUT',
        headers: {
            // Provide our auth token as credentials
            Authorization: `Bearer ${authToken}`
        },
        body: {
        	username: currentUser.username,
        	stock: {
        		symbol,
        		units
        	}
        }
    })
        .then(res => normalizeResponseErrors(res))
        .then(res => res.json())
        .then(({data}) => dispatch(fetchStockInfoSuccess(data)))
        .catch(err => {
            dispatch(fetchStockInfoError(err));
        });
};

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

export const CLEAR_OPTIONS = 'CLEAR_OPTIONS';
export const clearOptions = () => ({
	type: CLEAR_OPTIONS
})

export const CHANGE_LOGIN_STATUS = 'CHANGE_LOGIN_STATUS'
export const changeLoginStatus = () => ({
	type: CHANGE_LOGIN_STATUS
});

export const DELETE_COMPANY = 'DELETE_COMPANY';
export const deleteCompany = (symbol) => ({
	type: DELETE_COMPANY,
	symbol
});

export const CHANGE_INFOMODAL = 'CHANGE_INFOMODAL';
export const changeInfoModal = () => ({
    type: CHANGE_INFOMODAL
});



export const FETCH_STOCKINFO_SUCCESS = 'FETCH_STOCKINFO_SUCCESS';
export const fetchStockInfoSuccess = data => ({
    type: FETCH_STOCKINFO_SUCCESS,
    data
});

export const FETCH_STOCKINFO_ERROR = 'FETCH_STOCKINFO_ERROR';
export const fetchStockInfoError = error => ({
    type: FETCH_STOCKINFO_ERROR,
    error
});

export const fetchStockInfo = () => (dispatch, getState) => {
    const {authToken} = getState().stock;

    return fetch(`${API_BASE_URL}/stock`, {
        method: 'GET',
        headers: {
            // Provide our auth token as credentials
            Authorization: `Bearer ${authToken}`
        }
    })
        .then(res => normalizeResponseErrors(res))
        .then(res => res.json())
        .then(({data}) => dispatch(fetchStockInfoSuccess(data)))
        .catch(err => {
            dispatch(fetchStockInfoError(err));
        });
};
