import React from 'react';
import {shallow, mount} from 'enzyme';
import {searchCompany, clearOptions} from '../actions';

import {Search} from './search';




describe('<Search />', () => {
	let  wrapper, dispatch, onAdd, user, options
	beforeEach(() => {

		dispatch = jest.fn()
		onAdd = jest.fn()
		user = {
			stocks: [
			{
				symbol: 'AMZN',
				units:1
			}
			]
		}
		options = [
		{
			symbol:'TSLA',
			description:'Tesla'
		}]
		wrapper = mount(
				<Search dispatch={dispatch} onAdd={onAdd} user={user} options={options}/>
		);
		
	})
	it('Renders without crashing', () => {
		wrapper;
	});

	it('Should display search form', () => {
		expect(wrapper.find('div').first().hasClass('search')).toEqual(true);
	});

	it('Should invoke dispatch when input is entered', () => {
		wrapper.find('input[type="search"]').simulate('change', {target: {value: 't'}});
		expect(dispatch).toHaveBeenCalled();
	});

	it('Should render options when input is entered', () => {
		wrapper.find('input[type="search"]').simulate('change', {target: {value: 't'}});
		expect(wrapper.find('div.search-results')).toHaveLength(1);
	});

	it('Should dispatch clearOptions when list item is clicked', () => {
		wrapper.find('input[type="search"]').simulate('change', {target: {value: 't'}});
		wrapper.find('div.search-results').find('div').last().simulate('click');
		expect(dispatch).toHaveBeenCalledWith(clearOptions());
		expect(wrapper.find('input[type="search"]').instance().value).toBe('Tesla');

	});


	

	
	
});