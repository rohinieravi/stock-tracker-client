import React from 'react';
import {shallow, mount} from 'enzyme';
import {deleteCompany, changeInfoModal} from '../actions';
import {InfoModal} from './infomodal';

describe('<InfoModal />', () => {
	let wrapper, dispatch, onClose, onDelete, company;
	beforeEach(() => {
		dispatch = jest.fn();
		onClose = jest.fn();
		onDelete = jest.fn();
		company = {
			stockInfo: {
				description:''
			}
		};
		wrapper = mount(
				<InfoModal dispatch={dispatch} onClose={onClose} onDelete={onDelete} company={company}/>
		);
	})

	it('Renders without crashing', () => {
		wrapper;
	});

	it('Should dispatch action when delete is clicked', () => {
		wrapper.find('.delete').simulate('click');
       	expect(dispatch).toHaveBeenCalled();
    });

    it('Should invoke onClose when cancel is clicked', () => {
    	wrapper.find('.close').simulate('click');
    	expect(onClose).toHaveBeenCalled();
    });
	
});