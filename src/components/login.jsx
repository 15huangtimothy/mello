import React, { Component } from "react";
import "./login.css";

class Login extends Component {
    state = {};

    render() {
        return (
            <div className="container login-container">
                <div className="row">
                    <div className="col-lg-6 col-lg-offset-3 text-center center-block">
                        <h1 className="title">mello.</h1>
                        <button
                            onClick={this.props.onLogin}
                            type="button"
                            className="btn btn-primary login-btn"
                        >
                            <h6>Log In with Trello</h6>
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;
