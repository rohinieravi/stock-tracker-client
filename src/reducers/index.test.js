import {stockReducer} from './index';
import {
	addCompanyStart,
	addCompanySuccess,
	addCompanyError,
	deleteCompanySuccess,
	deleteCompanyError,
	updateUnitsSuccess,
	updateUnitsError,
	searchCompanySuccess,
	searchCompanyError,
	clearOptions,
	changeLoginStatus,
	changeInfoModal,
	fetchStockInfoSuccess,
	fetchStockInfoError
} from '../actions';
import {setAuthToken,setCurrentUser} from '../actions/auth.js';



describe('stockReducer', () => {
    // Set up some dummy data
    const companies = [{
    		symbol: "ABC",
    		units:10
    	}]
	const options = {
		securities:{
			security:[{
				symbol:'DEF',
				description:'DEF',
			}]
		}
	}
	const loggedIn = false
	const showInfoModal = false
	const authToken = '1234567890abcdef'
    const newUser = {
    	stocks: [{
    		symbol: "ABC",
    		units:10
    	}]}
    const error = "error";
    const isAdding = false
    const data = {
    		quotes: {
    			quote:[{
    				symbol: 'DEF',
    				price:123
    			}]
    		}
    	
    }


    it('Should set the initial state when nothing is passed in', () => {
        const state = stockReducer(undefined, {type: '__UNKNOWN'});
        expect(state).toEqual({
            companies: [],
			options:[],
			loggedIn: false,
			showInfoModal:false,
			authToken: null, 
		    currentUser: null,
		    error: null,
		    isAdding: false
        });
    });

    it('Should return the current state on an unknown action', () => {
        let currentState = {};
        const state = stockReducer(currentState, {type: '__UNKNOWN'});
        expect(state).toBe(currentState);
    });

    describe('addCompanySuccess', () => {
        it('Should add new stocks for user', () => {
            let state = {};
            state = stockReducer(state, addCompanySuccess(newUser));
            expect(state).toEqual({
                currentUser: newUser,
                isAdding: false
            });
        });
    });


    describe('addCompanyError', () => {
        it('Should add to error if add company throws error', () => {
            let state = {};
            state = stockReducer(state, addCompanyError(error));
            expect(state).toEqual({
                error
            });
        });
    });

    describe('addCompanyStart', () => {
        it('Should set flag when adding company', () => {
            let state={};
            state = stockReducer(state, addCompanyStart());
            expect(state).toEqual({
            	isAdding:true
            });
        });
    });

    describe('deleteCompanySuccess', () => {
        it('Should delete company', () => {
            let state={currentUser:newUser,companies};
            state = stockReducer(state, deleteCompanySuccess('ABC'));
            expect(state).toEqual({
            	currentUser:{stocks:[]},
            	companies:[]
            });
        });
    });

    describe('deleteCompanyError', () => {
        it('Should add to error if delete company throws error', () => {
            let state={};
            state = stockReducer(state, deleteCompanyError(error));
            expect(state).toEqual({
            	error
            });
        });
    });

    describe('updateUnitsSuccess', () => {
        it('Should update units', () => {
            let state={currentUser: newUser};
            state = stockReducer(state, updateUnitsSuccess('ABC',20));
            expect(state).toEqual({
            	currentUser:{
            		stocks:[{
            			symbol:'ABC',
            			units:20
            		}]
            	},
            	isAdding:false
            });
        });
    });

    describe('updateUnitsError', () => {
        it('Should add to error if update units throws error', () => {
            let state={};
            state = stockReducer(state, updateUnitsError(error));
            expect(state).toEqual({
            	error
            });
        });
    });

    describe('searchCompanySuccess', () => {
        it('Should get options for search company', () => {
            let state={};
            state = stockReducer(state, searchCompanySuccess(options));
            expect(state).toEqual({
            	options: options.securities.security
            });
        });
    });

    describe('searchCompanyError', () => {
        it('Should add to error if search company throws error', () => {
            let state={};
            state = stockReducer(state, searchCompanyError(error));
            expect(state).toEqual({
            	error
            });
        });
    });

    describe('clearOptions', () => {
        it('Should clear options', () => {
            let state={};
            state = stockReducer(state, clearOptions());
            expect(state).toEqual({
            	options:[]
            });
        });
    });

    describe('changeInfoModal', () => {
        it('Should set showInfoModal', () => {
            let state={showInfoModal};
            state = stockReducer(state, changeInfoModal());
            expect(state).toEqual({
            	showInfoModal: true
            });
        });
    });

    describe('setAuthToken', () => {
        it('Should set authToken', () => {
            let state={};
            state = stockReducer(state, setAuthToken(authToken));
            expect(state).toEqual({
            	authToken
            });
        });
    });

    describe('setCurrentUser', () => {
        it('Should set currentUser', () => {
            let state={};
            state = stockReducer(state, setCurrentUser(newUser));
            expect(state).toEqual({
            	currentUser: newUser
            });
        });
    });

    describe('fetchStockInfoSuccess', () => {
        it('Should fetch stock info', () => {
            let state={};
            state = stockReducer(state, fetchStockInfoSuccess(data));
            expect(state).toEqual({
            	companies: data.quotes.quote
            });
        });
    });

    describe('fetchStockInfoError', () => {
        it('Should add to error if fetch stock info throws error', () => {
            let state={};
            state = stockReducer(state, fetchStockInfoError(error));
            expect(state).toEqual({
            	error
            });
        });
    });

});


