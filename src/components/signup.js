import React from 'react';
import {reduxForm, Field, focus} from 'redux-form';
import Input from './input';
import {required, nonEmpty, email} from '../validators';
//import {changeLoginStatus} from '../actions';
import './app.css';


export class SignUpForm extends React.Component {
	onSubmit(event) {
		event.preventDefault();

		/*this.props.dispatch(changeLoginStatus());
		
		this.props.history.push('/userhome');*/
		alert("Sign up feature to be added soon. Login as demo user for testing.");
	}

	render() {
		
        let errorMessage;
        if (this.props.error) {
            errorMessage = (
                <div className="message message-error">{this.props.error}</div>
            );
        }

		return (
			
		        <form className='signup-form' onSubmit={e=>this.onSubmit(e)}>
                    
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
	                    name="email"
	                    type="email"
	                    component={Input}
	                    label="Email"
	                    validate={[required, nonEmpty, email]}
	                />
	                <Field
	                    name="password"
	                    type="password"
	                    component={Input}
	                    label="Password"
	                    validate={[required, nonEmpty]}
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
