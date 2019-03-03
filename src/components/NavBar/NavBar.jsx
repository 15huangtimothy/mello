import React, { Component } from 'react';
import SelectBoard from './SelectBoard';
import './NavBar.css';

class NavBar extends Component {
    state = { memberID: null };
    constructor(props) {
        super(props);
        this.props.trelloHandler.getMember(m => {
            this.setState({ memberID: m.id });
        });
    }

    generateAccountLink = () => {
        /** Generates a link to the user's Trello account settings page */
        if (this.state.memberID) {
            return 'https://trello.com/' + this.state.memberID + '/account';
        } else {
            return '#';
        }
    };

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
                    <a
                        href={this.generateAccountLink()}
                        className="account-icon align-middle"
                    >
                        <i
                            className="material-icons align-middle"
                            title="Account Settings"
                        >
                            account_circle
                        </i>
                    </a>
                </div>
            </nav>
        );
    }
}

export default NavBar;
