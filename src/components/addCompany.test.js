import React from 'react';
import {shallow, mount} from 'enzyme';

import {AddCompany} from './addCompany';
import {addCompany, clearOptions} from '../actions';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import {stockReducer} from '../reducers';



describe('<AddCompany />', () => {
	let store, wrapper, dispatch, onCancel
	beforeEach(() => {

		store = createStore(combineReducers({ stock: stockReducer }), applyMiddleware(thunk))
		dispatch = jest.fn()
		onCancel = jest.fn()


		wrapper = mount(
			<Provider store={store}>
				<AddCompany dispatch={dispatch} onCancel={onCancel} />
			</Provider>
		);
		
	})
	it('Renders without crashing', () => {
		shallow(<AddCompany />);
	});

	it('Should cancel add when cancel button is clicked', () => {
        wrapper.find('button').last().simulate('click');
        expect(dispatch).toHaveBeenCalledWith(clearOptions());
	})
	
	it('Should dispatch addCompany when add button is clicked', () => {

        wrapper.find('button').first().simulate('click');
        expect(dispatch).toHaveBeenCalled();
	})
});