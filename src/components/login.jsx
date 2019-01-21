import React, { Component } from "react";
import "./login.css";

class Login extends Component {
    state = {};

    render() {
        return (
            <div className="container login-container">
                <div className="row">
                    <div className="col-md-6 col-md-offset-3 text-center center-block login-col">
                        <LoginForm />
                    </div>
                </div>
            </div>
        );
    }
}

function LoginForm(props) {
    return (
        <React.Fragment>
            <h1 className="title">mello.</h1>
            <form class="login-form">
                <input
                    class="form-control"
                    type="email"
                    name="loginEmail"
                    id="loginEmail"
                    placeholder="Email address"
                    required
                />
                <input
                    class="form-control"
                    type="password"
                    name="loginPass"
                    id="loginPass"
                    placeholder="Password"
                    required
                />
                <button
                    /**onClick={this.props.onLogin}*/
                    type="button"
                    className="login-btn btn"
                >
                    Log In
                </button>
            </form>
        </React.Fragment>
    );
}

export default Login;
