import React from 'react';
//import {changeLoginStatus} from '../actions';
//import {connect} from 'react-redux';
import {Field, reduxForm, focus} from 'redux-form';
import Input from './input';
import {login} from '../actions/auth';
import {required, nonEmpty, email} from '../validators';
import {withRouter} from 'react-router';


export class Login extends React.Component {

	/*onSubmit(event) {
		event.preventDefault();
		if(this.username.value.trim() === "demo" && this.password.value.trim() === "123") {
			this.div.innerHTML = "";
			this.props.dispatch(changeLoginStatus());
			this.props.history.push('/userhome');
		}
		else {
			this.div.innerHTML = "Incorrect Username or password.";
		}
	}*/
	onSubmit(values) {
        return this.props
        .dispatch(login(values.username, values.password))
        .then(() =>  this.props.history.push('/userhome'));
    }

	render() {
		let error;
        if (this.props.error) {
            error = (
                <div className="form-error" aria-live="polite">
                    {this.props.error}
                </div>
            );
        }
		return (
			<section className="login">
         		<header>
          			<h3>Login to your Account</h3>
        		</header>
        		<form
                className="login-form"
                onSubmit={this.props.handleSubmit(values =>
                    this.onSubmit(values)
                )}>
                                <div className="row">

                {error}
                </div>


                <Field
                    component={Input}
                    type="text"
                    name="username"
                    id="username"
                    label="Username"
                    validate={[required, nonEmpty, email]}
                />


                <Field
                    component={Input}
                    type="password"
                    name="password"
                    id="password"
                    label="Password"
                    validate={[required, nonEmpty]}
                />
                                <div className="row">
                <button disabled={this.props.pristine || this.props.submitting}>
                    Log in
                </button>
                </div>
                <div className="demo-login">
                <div>Demo Login</div>
				<div>Username: demo@hi.com</div>
                <div>Password: password1234 </div>
                </div>
            </form>
        		
      		</section>
		);
	}
}

const createReduxForm = reduxForm({
    form: 'login',
    onSubmitFail: (errors, dispatch) => dispatch(focus('login', 'username'))
});

export default withRouter(createReduxForm(Login));
