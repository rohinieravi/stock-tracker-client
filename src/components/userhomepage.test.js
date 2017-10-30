import React from 'react';
import {shallow} from 'enzyme';

import {HomePage} from './userhomepage';

describe('<HomePage />', () => {
	it('Renders without crashing', () => {
		shallow(<HomePage />);
	});

	it('Renders the add button initially', () => {
        const wrapper = shallow(<HomePage />);
        expect(wrapper.hasClass('addButton')).toEqual(true);
    });
});