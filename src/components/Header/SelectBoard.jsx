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
            <div className="container">
                <select
                    className="browser-default custom-select"
                    onChange={this.props.onSelect}
                >
                    <option key={0} value={0}>
                        Select Board
                    </option>
                    {this.state.boards && this.generateBoardList()}
                </select>
            </div>
        );
    }
}

export default SelectBoard;
