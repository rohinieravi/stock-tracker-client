import React from 'react';
import {shallow, mount} from 'enzyme';
import SignUpForm from './signup';
import { reducer as formReducer } from 'redux-form'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk';
import {stockReducer} from '../reducers';

describe('<SignUpForm />', () => {

	let store;
	let wrapper;
	let dispatch;
	beforeEach(() => {
		store = createStore(combineReducers({ form: formReducer, stock: stockReducer }),applyMiddleware(thunk));
		dispatch = jest.fn();
		wrapper = mount(
			<Provider store={store}>
				<SignUpForm dispatch={dispatch}/>
			</Provider>
		);
	})
	
	it('Renders the sign up form initially', () => {
		expect(wrapper.find('form').hasClass('signup-form')).toEqual(true);
	});
	
});