import React, { Component } from "react";
import "./Login.css";

class Login extends Component {
    state = {};

    render() {
        return (
            <div className="container login-container">
                <div className="panel text-center center-block">
                    <h1 className="title">mello.</h1>
                    <button
                        onClick={this.props.onLogin}
                        type="button"
                        className="btn login-btn"
                    >
                        Log In with Trello
                    </button>
                </div>
            </div>
        );
    }
}

export default Login;
