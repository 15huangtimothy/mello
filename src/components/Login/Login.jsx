import React, { Component } from 'react';
import './Login.css';

class Login extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="container login-container">
                    <div className="panel text-center center-block">
                        <h1 className="title">mello</h1>
                        <button
                            onClick={this.props.onLogin}
                            type="button"
                            className="btn login-btn"
                        >
                            Log In with Trello
                        </button>
                    </div>
                </div>
                <div className="created-by">
                    <p>
                        Created by:{' '}
                        <a href="https://github.com/15huangtimothy/">
                            Tim Huang
                        </a>
                    </p>
                </div>
            </React.Fragment>
        );
    }
}

export default Login;
