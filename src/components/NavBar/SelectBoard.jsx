import React, { Component } from "react";

class SelectBoard extends Component {
    state = {
        boards: null
    };
    constructor(props) {
        super(props);
        this.props.trelloHandler.loadBoards(b => {
            this.setState({ boards: b });
        });
    }

    generateBoardList = () => {
        /** Generate dropdown list of boards */
        return this.state.boards.map(b => (
            <option key={b.id} value={b.id}>
                {b.name}
            </option>
        ));
    };

    render() {
        return (
            <select
                className="form-control select-board"
                onChange={this.props.onSelect}
            >
                <option key={-1} value={-1}>
                    Select Board
                </option>
                {this.state.boards && this.generateBoardList()}
            </select>
        );
    }
}

export default SelectBoard;
