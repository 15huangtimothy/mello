import React, { Component } from "react";
import SelectBoard from "./SelectBoard";
import "./NavBar.css";

class NavBar extends Component {
    state = {};
    render() {
        return (
            <nav className="navbar">
                <div className="col-sm-3 text-left">
                    <ul className="navbar-nav align-middle">
                        <li className="nav-item">
                            <SelectBoard
                                trelloHandler={this.props.trelloHandler}
                                onSelect={this.props.onSelect}
                            />
                        </li>
                    </ul>
                </div>
                <div className="col-sm-6">
                    <h1 className="title navbar-title align-middle">mello.</h1>
                </div>
                <div className="col-sm-3 text-right">
                    <i className="material-icons account-icon align-middle">
                        account_circle
                    </i>
                </div>
            </nav>
        );
    }
}

export default NavBar;
