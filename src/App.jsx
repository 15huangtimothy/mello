import React, { Component } from "react";
import "./App.css";
import Login from "./components/Login/Login";
import Main from "./components/Main/Main.jsx";
import TrelloHandler from "./TrelloHandler.js";

class App extends Component {
    Trello = new TrelloHandler(window.Trello);
    state = {
        authorized: false
    };

    onLogin = () => {
        /** Log In button pressed */
        console.log("Login Request");
        this.Trello.authorize(this.verifyAuthorize);
    };

    verifyAuthorize = success => {
        /** Callback function to verify if Trello authentication was successful.  */
        if (success) {
            this.setState({ authorized: true });
        }
    };

    render() {
        if (!this.state.authorized) {
            return <Login onLogin={this.onLogin} />;
        } else {
            return <Main trelloHandler={this.Trello} />;
        }
    }
}

export default App;
