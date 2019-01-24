import React, { Component } from "react";
import NavBar from "../NavBar/NavBar";

class Main extends Component {
    state = { selectedBoard: null };

    handleClick = () => {
        console.log(this.props.trelloHandler.boards);
    };

    handleSelect = event => {
        /** Board is selected. event.target.value returns board id. */
        this.props.trelloHandler.getBoard(event.target.value, b => {
            this.setState({ selectedBoard: b }, this.boardSelected);
        });
    };

    boardSelected = () => {
        /** Executes once a board is selected */
        this.setBackground();
    };

    setBackground = () => {
        /** Set background image to selected board's background image */
        if (this.state.selectedBoard) {
            document.body.style.backgroundImage =
                "url(" + this.state.selectedBoard.prefs.backgroundImage + ")";
        }
    };

    render() {
        return (
            <div>
                <NavBar
                    trelloHandler={this.props.trelloHandler}
                    onSelect={this.handleSelect}
                />
                <button className="btn btn-primary" onClick={this.handleClick}>
                    Hi
                </button>
            </div>
        );
    }
}

export default Main;
