import React from 'react';
import {shallow, mount} from 'enzyme';
import Login from './login';
import { reducer as formReducer } from 'redux-form'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk';
import {stockReducer} from '../reducers';
import { MemoryRouter } from 'react-router'
import {login} from '../actions/auth';

describe('<Login />', () => {

	let store
	let wrapper
	let dispatch
	let submitting, touched, error, onSubmit
	let onSubmitResponse
	beforeEach(() => {

		store = createStore(combineReducers({ form: formReducer, stock: stockReducer }),applyMiddleware(thunk))
		dispatch = jest.fn()
		error = ''
		
		
		wrapper = mount(
			<Provider store={store}>
			<MemoryRouter>
				<Login dispatch={dispatch} error={error}/>
			</MemoryRouter>
			</Provider>
		);
	})

	
	it('Renders the login form initially', () => {
		expect(wrapper.find('form').hasClass('login-form')).toEqual(true);
	});

	
	/*it('should fire onSubmit callback when form is submitted', () => {
		const form = wrapper.find('form');
       	form.find('input[id="username"]').simulate('change', {target: {value: 'demo@hi.com'}});
        form.find('input[id="password"]').simulate('change', {target: {value: 'password1234'}});
       	form.simulate('submit');
       	expect(dispatch).toHaveBeenCalledWith(login);
       
	});*/
	
});