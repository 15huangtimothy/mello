import React, { Component } from "react";
import "./App.css";
import Login from "./components/login";

class App extends Component {
    onLogin = () => {
        /** Log In button pressed */
        console.log("Login Request");
    };

    render() {
        return <Login onLogin={this.onLogin} />;
    }
}

export default App;
