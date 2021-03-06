import React from 'react';
import {reduxForm, Field, focus} from 'redux-form';
import Input from './input';
import {required, nonEmpty, email, isTrimmed, length} from '../validators';
import {registerUser} from '../actions/users';
import {login} from '../actions/auth';
import './app.css';

export class SignUpForm extends React.Component {

	//on form submission, registers user and logs to his account
	onSubmit(values) {
        const {username, password, fname, lname} = values;
        const newUser = {
        	username, 
        	password, 
        	user: {
        		firstName: fname, 
        		lastName: lname
        	}
        };
        return this.props
            .dispatch(registerUser(newUser))
            .then(() => this.props.dispatch(login(username, password)));
    }
	
	render() {
		
        let errorMessage;
        if (this.props.error) {
            errorMessage = (
                <div className="message message-error">{this.props.error}</div>
            );
        }

		return (
	        <form className='signup-form' onSubmit={this.props.handleSubmit(values =>
                this.onSubmit(values)
            )}>
                
            	{errorMessage}
            	<Field
                    name="fname"
                    type="text"
                    component={Input}
                    label="First Name"
                    validate={[required, nonEmpty]}
            	/>
            	<Field
                    name="lname"
                    type="text"
                    component={Input}
                    label="Last Name"
                    validate={[required, nonEmpty]}
                />
                <Field
                    name="username"
                    type="email"
                    component={Input}
                    label="Email"
                    validate={[required, nonEmpty, email, isTrimmed]}
                />
                <Field
                    name="password"
                    type="password"
                    component={Input}
                    label="Password"
                    validate={[required, nonEmpty, length({min: 10, max: 72})]}
                />
                <button
                    type="submit"
                    disabled={this.props.pristine || this.props.submitting}>
                    Sign Up
                </button>
	        </form>							
		);
	}
}

export default reduxForm({
    form: 'signup',
    onSubmitFail: (errors, dispatch) => 
        dispatch(focus('signup', Object.keys(errors)[0]))
})(SignUpForm);
