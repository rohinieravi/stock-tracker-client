import React from 'react';
import {shallow, mount} from 'enzyme';
import {Company} from './company';
import {changeInfoModal} from '../actions';
import InfoModal from './infomodal';
import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {Provider } from 'react-redux';
import {stockReducer} from '../reducers';

describe('<Company />', () => {

	let store, wrapper, dispatch, onDelete, stockInfo, showInfoModal;

	beforeEach(() => {
		store = createStore(combineReducers({ stock: stockReducer }), applyMiddleware(thunk));
		showInfoModal = false;
		dispatch = jest.fn();
		onDelete = jest.fn();
		stockInfo = {
			description:'',
			last: '',
			change:''
		}
	})

	const buildWrapper = () => {
		return mount(
			<Company dispatch={dispatch} onDelete={onDelete} stockInfo={stockInfo} symbol='' showInfoModal={showInfoModal} />
		);
	}

	const buildWrapperWithStore = () => {
		return mount(
			<Provider store={store}>
				<Company dispatch={dispatch} onDelete={onDelete} stockInfo={stockInfo} symbol='' showInfoModal={showInfoModal} />
			</Provider>
		);
	}
		
	it('Renders without crashing', () => {
		shallow(<Company />);
	});

	it('Should be not render edit form when rendered', () => {
		wrapper = buildWrapper();
		 expect(wrapper.state('isEditing')).toEqual(false);
	});

	it('Should dispatch action when delete is clicked', () => {
		wrapper=buildWrapper();
		wrapper.find('button').last().simulate('click');
        expect(dispatch).toHaveBeenCalledWith(changeInfoModal());
    });

    it('Should render infomodal when deleting', () => {
    	showInfoModal=true;
    	wrapper=buildWrapperWithStore();
    	wrapper.find('button').last().simulate('click');
    	expect(wrapper.find('InfoModal')).toHaveLength(1);
    })
});