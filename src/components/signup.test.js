import React from 'react';
import {shallow, mount} from 'enzyme';

import SignUpForm from './signup';
import {registerUser} from '../actions/users';
import { reducer as formReducer } from 'redux-form'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk';
import {stockReducer} from '../reducers';



describe('<SignUpForm />', () => {

	let store
	let subject
	let dispatch
	let submitting, touched, error, onSubmit
	let onSubmitResponse
	beforeEach(() => {

		store = createStore(combineReducers({ form: formReducer, stock: stockReducer }),applyMiddleware(thunk))
		//submitting = false
		//touched = false
		//error = null
		//onSubmitResponse = Promise.resolve()
		dispatch = jest.fn()
	
	
			//onSubmit = jest.fn().mockReturnValue(onSubmitResponse)

		const props = {
			//submitting: submitting,
			/*fields: {
				fname: {
					value: '',
					touched: touched,
					error: error
				},
				lname: {
					value: '',
					touched: touched,
					error: error
				},
				username: {
					value: '',
					touched: touched,
					error: error
				},
				password: {
					value: '',
					touched: touched,
					error: error
				}

			},*/
			//handleSubmit: fn => fn,
			//onSubmit,
			
		}
		subject = mount(
			<Provider store={store}>
				<SignUpForm dispatch={dispatch}/>
			</Provider>
		);
	})

	
	it('Renders the sign up form initially', () => {
		//subject = buildSubject();
		expect(subject.find('form').hasClass('signup-form')).toEqual(true);
	});

	
	/*it('should fire onSubmit callback when form is submitted', () => {
		//subject = buildSubject();
		const form = subject.find('form');
       form.find('#fname').simulate('change', {target: {value: 'fname'}});
        form.find('#lname').simulate('change', {target: {value: 'lname'}});
        form.find('#username').simulate('change', {target: {value: 'fname@email.com'}});
        form.find('#password').simulate('change', {target: {value: 'password1234'}});
       	form.simulate('submit');
       	expect(dispatch).toHaveBeenCalled();
       
	});*/
	
});