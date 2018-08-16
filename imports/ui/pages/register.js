import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { Redirect } from 'react-router';
import { Users } from '../../api/users';

export default class Register extends Component {

    state = {
        toHome: false,
    };

    createUser(event) {
        event.preventDefault();

        const email = ReactDOM.findDOMNode(this.refs.email).value.trim();
        const username = ReactDOM.findDOMNode(this.refs.username).value.trim();
        const password = ReactDOM.findDOMNode(this.refs.password).value.trim();
        const confirmPassword = ReactDOM.findDOMNode(this.refs.confirmPassword).value.trim();

        if (password === confirmPassword) {
            let user = {
              email: email,
              username: username,
              password: password,
              confirmPassword: confirmPassword
            };
            Users.insert(user);
            ReactDOM.findDOMNode(this.refs.email).value = '';
            ReactDOM.findDOMNode(this.refs.username).value = '';
            ReactDOM.findDOMNode(this.refs.password).value = '';
            ReactDOM.findDOMNode(this.refs.confirmPassword).value = '';
            this.setState(() => ({
                toHome: true
            }))
        } else {
            ReactDOM.findDOMNode(this.refs.password).value = '';
            ReactDOM.findDOMNode(this.refs.confirmPassword).value = '';
        }
    }

    render() {
        if (this.state.toHome === true) {
            return <Redirect to='/'/>;
        }
        return (
            <div className="container">
                <header>
                    <h1 className="text-center">Register</h1>
                </header>
                <form onSubmit={this.createUser.bind(this)}>
                    <div className="form-group">
                        <label>Email address</label>
                        <input type="email" className="form-control" id="InputEmail1" aria-describedby="emailHelp" placeholder="Enter email" ref="email"/>
                    </div>
                    <div className="form-group">
                        <label>Username</label>
                        <input type="text" className="form-control" id="InputUsername" placeholder="Username" ref="username"/>
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input type="password" className="form-control" id="InputPassword1" placeholder="Password" ref="password"/>
                    </div>
                    <div className="form-group">
                        <label>Confirm Password</label>
                        <input type="password" className="form-control" id="ConfirmInputPassword1" placeholder="Confirm Password" ref="confirmPassword"/>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        );
    }
}