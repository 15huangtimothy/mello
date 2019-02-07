import React, { Component } from "react";
import NavBar from "../NavBar/NavBar";
import Board from "../Board/Board";

class Main extends Component {
    state = { selectedBoard: null };

    handleClick = () => {
        console.log(this.props.trelloHandler.boards);
    };

    handleSelect = event => {
        /** Board is selected. event.target.value returns board id. */
        this.props.trelloHandler.getBoard(
            event.target.value,
            b => {
                this.setState({ selectedBoard: b }, this.boardSelected);
            },
            () => {
                this.setState({ selectedBoard: null }, this.boardDeselected);
            }
        );
    };

    boardSelected = () => {
        /** Executes once a board is selected */
        this.setBackground(true);
    };

    boardDeselected = () => {
        /** Executes when no board is selected */
        this.setBackground(false);
    };

    setBackground = selected => {
        /** Set background image to selected board's background image */
        if (!selected) {
            document.body.style.backgroundImage = "none";
        } else if (this.state.selectedBoard) {
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
                <Board />
            </div>
        );
    }
}

export default Main;
