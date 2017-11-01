import React from 'react';
import {shallow, mount} from 'enzyme';

import {EditUnits} from './editUnits';




describe('<EditUnits />', () => {
	let  wrapper, dispatch, onCancel, symbol, currentUser
	beforeEach(() => {

		dispatch = jest.fn()
		onCancel = jest.fn()
		symbol = 'AMZN'
		currentUser = {
			stocks: [{
				symbol:'AMZN',
				units:'2'
			}]
		}


		wrapper = mount(
				<EditUnits dispatch={dispatch} onCancel={onCancel} symbol={symbol} currentUser={currentUser}/>
		);
		
	})
	it('Renders without crashing', () => {
		wrapper;
	});

	it('Should display units correctly', () => {
		expect(wrapper.find('input[type="number"]').instance().value).toBe('2');
	});

	it('Should dispatch action when form is submitted', () => {
		wrapper.find('form').simulate('submit');
        expect(dispatch).toHaveBeenCalled();
    });

    it('Should invoke onCancel when cancel is clicked', () => {
    	wrapper.find('button').last().simulate('click');
    	expect(onCancel).toHaveBeenCalled();
    });

	
	
});