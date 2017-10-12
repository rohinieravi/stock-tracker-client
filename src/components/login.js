import React from 'react';
import {changeLoginStatus} from '../actions';
import {connect} from 'react-redux';


export class Login extends React.Component {

	onSubmit(event) {
		event.preventDefault();
		if(this.username.value.trim() === "demo" && this.password.value.trim() === "123") {
			this.div.innerHTML = "";
			this.props.dispatch(changeLoginStatus());
			this.props.history.push('/userhome');
		}
		else {
			this.div.innerHTML = "Incorrect Username or password.";
		}
	}

	render() {

		return (
			<section>
         		<header>
          			<h3>Login</h3>
        		</header>
        		<form className="userlogin" onSubmit={e => this.onSubmit(e)}>
          			<div>
					  	<label htmlFor="username">Username </label>
					  	<input type="text" name="username" id="username" required ref={input => this.username = input} />
					</div>
					<div>
					  	<label htmlFor="password">Password </label>
					  	<input type="password" name="password" id="password" required ref={input => this.password = input} />
					</div>
					<input type="submit" value="Login" id="login" />
					<div ref={div=>this.div=div}></div>
					<div>Demo Login:</div>
					<div>Username: demo, Password: 123 </div>
				</form>
      		</section>
		);
	}
}

const mapStateToProps = (state, props) => {
	return state.stock;

}
export default connect(mapStateToProps)(Login);