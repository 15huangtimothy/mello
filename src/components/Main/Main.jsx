import React, { Component } from 'react';
import NavBar from '../NavBar/NavBar';
import Board from '../Board/Board';
import './Main.css';

class Main extends Component {
    state = { selectedBoard: null, lists: null };

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
                this.setState(
                    { selectedBoard: null, lists: null },
                    this.boardDeselected
                );
            }
        );
    };

    boardSelected = () => {
        /** Executes once a board is selected */
        this.boardDeselected();
        // Reset lists before loading new lists
        this.loadLists(null, () => {
            this.setBackground(true);
            this.props.trelloHandler.getListTaskData(
                this.state.selectedBoard.id,
                this.loadLists
            );
        });
    };

    boardDeselected = () => {
        /** Executes when no board is selected */
        this.setBackground(false);
        this.props.trelloHandler.resetTaskData();
    };

    setBackground = selected => {
        /** Set background image to selected board's background image */
        if (!selected) {
            document.body.style.backgroundImage = 'none';
        } else if (this.state.selectedBoard) {
            document.body.style.backgroundImage =
                'url(' + this.state.selectedBoard.prefs.backgroundImage + ')';
        }
    };

    loadLists = (l, callback = function() {}) => {
        /**
         * Callback function when list/task data is done processing by TrelloHandler.
         * List/task data returned through l.
         */
        this.setState({ lists: l }, callback);
    };

    generateBoard() {
        /** Returns Board object containing loaded lists and tasks */
        return (
            <Board
                lists={this.state.lists}
                trelloHandler={this.props.trelloHandler}
            />
        );
    }

    selectBoardMessage() {
        return <h2 className="select-board-message">Please Select a Board</h2>;
    }

    render() {
        return (
            <div>
                <NavBar
                    trelloHandler={this.props.trelloHandler}
                    onSelect={this.handleSelect}
                />
                {!this.state.selectedBoard && this.selectBoardMessage()}
                {this.state.lists && this.generateBoard()}
            </div>
        );
    }
}
// {this.state.boards && this.generateBoardList()}
export default Main;
