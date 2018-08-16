import React, { Component } from 'react';
import ReactDOM from "react-dom";
import { Redirect } from 'react-router';

export default class Login extends Component {
    state = {
        toHome: false,
    };

    login(event) {
        event.preventDefault();

        const username = ReactDOM.findDOMNode(this.refs.username).value.trim();
        const password = ReactDOM.findDOMNode(this.refs.password).value.trim();
        Meteor.call('test', username);
        ReactDOM.findDOMNode(this.refs.username).value = '';
        ReactDOM.findDOMNode(this.refs.password).value = '';
    }

    render() {
        if (this.state.toHome === true) {
            return <Redirect to='/'/>;
        }
        return (
            <div className="container">
                <header>
                    <h1 className="text-center">Login</h1>
                </header>
                <form onSubmit={this.login.bind(this)}>
                    <div className="form-group">
                        <label>Username</label>
                        <input type="text" className="form-control" id="InputUsername" placeholder="Username" ref="username"/>
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input type="password" className="form-control" id="InputPassword1" placeholder="Password" ref="password"/>
                    </div>
                    <button type="submit" className="btn btn-primary">Login</button>
                </form>
            </div>
        );
    }
}