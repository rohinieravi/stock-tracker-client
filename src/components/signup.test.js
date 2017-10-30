import React from 'react';
import {shallow, mount} from 'enzyme';

import SignUpForm from './signup';
import {registerUser} from '../actions/users';


describe('<SignUpForm />', () => {
	it('Renders without crashing', () => {
		shallow(<SignUpForm />);
	});

	it('Renders the sign up form initially', () => {
		const wrapper = shallow(<SignUpForm />);
		expect(wrapper.hasClass('signup-form')).toEqual(true);
	});

	it('should fire onSubmit callback when form is submitted', () => {
		const dispatch = jest.fn();
        const wrapper = mount(<SignUpForm dispatch={dispatch} />);
        wrapper.find('input[id="fname"]').node.value = "fname";
        wrapper.find('input[id="lname"]').node.value = "lname";
        wrapper.find('input[id="username"]').node.value = "username@email.com";
       	wrapper.find('input[id="password"]').node.value = "password1234";
       	const newUser = {
        	username: "username@email.com", 
        	password: "password1234", 
        	user: {
        		firstName: "fname", 
        		lastName: "lname"
        	}
        };
        wrapper.simulate('submit');
        expect(dispatch).toHaveBeenCalledWith(registerUser(newUser));
	});
	
});