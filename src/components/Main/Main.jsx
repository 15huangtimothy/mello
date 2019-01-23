import React, { Component } from "react";
import SelectBoard from "../Header/SelectBoard.jsx";

class Main extends Component {
    state = { selectedBoardId: null };

    handleClick = () => {
        console.log(this.props.trelloHandler.boards);
    };

    handleSelect = event => {
        /** Board Selected */
        console.log(event.target.value);
        this.setState({ selectedBoardId: event.target.value });
    };

    render() {
        return (
            <div>
                <SelectBoard
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
