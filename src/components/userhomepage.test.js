import React from 'react';
import {shallow} from 'enzyme';

import {HomePage} from './userhomepage';

describe('<HomePage />', () => {
	it('Renders without crashing', () => {
		shallow(<HomePage />);
	});

	it('Renders the add button initially', () => {
		const newUser = {
        	username: "username@email.com", 
        	password: "password1234", 
        	user: {
        		firstName: "fname", 
        		lastName: "lname"
        	},
        	stocks:[]
        };
        const wrapper = shallow(<HomePage loggedIn='true' user={newUser}/>);
        expect(wrapper.find('button').hasClass('addButton')).toEqual(true);
    });
});