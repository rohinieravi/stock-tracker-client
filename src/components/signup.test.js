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
	let wrapper
	let dispatch
	beforeEach(() => {

		store = createStore(combineReducers({ form: formReducer, stock: stockReducer }),applyMiddleware(thunk))
		dispatch = jest.fn()
		
		wrapper = mount(
			<Provider store={store}>
				<SignUpForm dispatch={dispatch}/>
			</Provider>
		);
	})

	
	it('Renders the sign up form initially', () => {
		expect(wrapper.find('form').hasClass('signup-form')).toEqual(true);
	});

	
	/*it('should fire onSubmit callback when form is submitted', (done) => {
		const form = wrapper.find('form');
       form.find('#fname').simulate('change', {target: {value: 'fname'}});
        form.find('#lname').simulate('change', {target: {value: 'lname'}});
        form.find('#username').simulate('change', {target: {value: 'fname@email.com'}});
        form.find('#password').simulate('change', {target: {value: 'password1234'}});
        form.simulate('submit');
       	expect(dispatch).toHaveBeenCalled();

	});*/
	
});