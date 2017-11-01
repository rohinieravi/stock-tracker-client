import {
	addCompanyStart,
	ADD_COMPANY_START,
	addCompanySuccess,
	ADD_COMPANY_SUCCESS,
	ADD_COMPANY_ERROR,
	addCompanyError,
	deleteCompanySuccess,
	DELETE_COMPANY_SUCCESS,
	deleteCompanyError,
	DELETE_COMPANY_ERROR,
	UPDATE_UNITS_SUCCESS,
	updateUnitsSuccess,
	UPDATE_UNITS_ERROR,
	updateUnitsError,
	SEARCH_COMPANY_SUCCESS,
	searchCompanySuccess,
	SEARCH_COMPANY_ERROR,
	searchCompanyError,
	CLEAR_OPTIONS,
	clearOptions,
	CHANGE_LOGIN_STATUS,
	changeLoginStatus,
	CHANGE_INFOMODAL,
	changeInfoModal,
	FETCH_STOCKINFO_SUCCESS,
	fetchStockInfoSuccess,
	FETCH_STOCKINFO_ERROR,
	fetchStockInfoError
} from './index';

import {SET_AUTH_TOKEN, setAuthToken, SET_CURRENT_USER, setCurrentUser} from './auth.js';

describe('addCompanyStart', () => {
    it('Should return the action', () => {
        const action = addCompanyStart();
        expect(action.type).toEqual(ADD_COMPANY_START);
    });
});

describe('addCompanySuccess', () => {
    it('Should return the action', () => {
    	const data = {};
        const action = addCompanySuccess(data);
        expect(action.type).toEqual(ADD_COMPANY_SUCCESS);
        expect(action.data).toEqual(data);

    });
});

describe('addCompanyError', () => {
    it('Should return the action', () => {
    	const error = "";
        const action = addCompanyError(error);
        expect(action.type).toEqual(ADD_COMPANY_ERROR);
        expect(action.error).toEqual(error);

    });
});

describe('deleteCompanySuccess', () => {
    it('Should return the action', () => {
    	const symbol = "";
        const action = deleteCompanySuccess(symbol);
        expect(action.type).toEqual(DELETE_COMPANY_SUCCESS);
        expect(action.symbol).toEqual(symbol);

    });
});

describe('deleteCompanyError', () => {
    it('Should return the action', () => {
    	const error = "";
        const action = deleteCompanyError(error);
        expect(action.type).toEqual(DELETE_COMPANY_ERROR);
        expect(action.error).toEqual(error);

    });
});

describe('updateUnitsSuccess', () => {
    it('Should return the action', () => {
    	const symbol = "";
    	const units = 1;
        const action = updateUnitsSuccess(symbol, units);
        expect(action.type).toEqual(UPDATE_UNITS_SUCCESS);
        expect(action.symbol).toEqual(symbol);
        expect(action.units).toEqual(units);
    });
});

describe('updateUnitsError', () => {
    it('Should return the action', () => {
    	const error = "";
        const action = updateUnitsError(error);
        expect(action.type).toEqual(UPDATE_UNITS_ERROR);
        expect(action.error).toEqual(error);
    });
});

describe('searchCompanySuccess', () => {
    it('Should return the action', () => {
    	const options = [];
        const action = searchCompanySuccess(options);
        expect(action.type).toEqual(SEARCH_COMPANY_SUCCESS);
        expect(action.options).toEqual(options);
    });
});

describe('searchCompanyError', () => {
    it('Should return the action', () => {
    	const error = "";
        const action = searchCompanyError(error);
        expect(action.type).toEqual(SEARCH_COMPANY_ERROR);
        expect(action.error).toEqual(error);
    });
});

describe('clearOptions', () => {
    it('Should return the action', () => {
        const action = clearOptions();
        expect(action.type).toEqual(CLEAR_OPTIONS);
    });
});

describe('changeLoginStatus', () => {
    it('Should return the action', () => {
        const action = changeLoginStatus();
        expect(action.type).toEqual(CHANGE_LOGIN_STATUS);
    });
});

describe('changeInfoModal', () => {
    it('Should return the action', () => {
        const action = changeInfoModal();
        expect(action.type).toEqual(CHANGE_INFOMODAL);
    });
});

describe('fetchStockInfoSuccess', () => {
    it('Should return the action', () => {
    	const data = {};
        const action = fetchStockInfoSuccess(data);
        expect(action.type).toEqual(FETCH_STOCKINFO_SUCCESS);
        expect(action.data).toEqual(data);

    });
});

describe('fetchStockInfoError', () => {
    it('Should return the action', () => {
    	const error = "";
        const action = fetchStockInfoError(error);
        expect(action.type).toEqual(FETCH_STOCKINFO_ERROR);
        expect(action.error).toEqual(error);

    });
});

describe('setAuthToken', () => {
    it('Should return the action', () => {
    	const authToken = "";
        const action = setAuthToken(authToken);
        expect(action.type).toEqual(SET_AUTH_TOKEN);
        expect(action.authToken).toEqual(authToken);

    });
});

describe('setCurrentUser', () => {
    it('Should return the action', () => {
    	const currentUser = {};
        const action = setCurrentUser(currentUser);
        expect(action.type).toEqual(SET_CURRENT_USER);
        expect(action.currentUser).toEqual(currentUser);

    });
});