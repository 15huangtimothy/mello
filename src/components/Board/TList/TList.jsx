import React, { Component } from 'react';
import { Droppable } from 'react-beautiful-dnd';
import ListItem from './ListItem/ListItem';
import './TList.css';

class TList extends Component {
    state = { addingNewTask: false, newTask: null };

    newTaskButton() {
        /**
         * Conditionally generates and returns the add new task button
         * or input field for entering a new task name.
         */
        if (this.state.addingNewTask) {
            return (
                <form
                    className="new-task-container"
                    onSubmit={this.onSubmitNewTask}
                >
                    <input
                        className="new-task-input"
                        type="text"
                        value={this.state.value}
                        placeholder="Enter New Task"
                        onChange={this.handleNewTaskChange}
                    />
                    <input
                        type="submit"
                        value="Add"
                        className="btn btn-new-task-submit"
                    />
                </form>
            );
        } else {
            return (
                <div className="new-task-container">
                    <button
                        className="btn btn-new-task"
                        onClick={() => {
                            this.setState({ addingNewTask: true });
                        }}
                    >
                        <i className="material-icons">add</i>
                    </button>
                </div>
            );
        }
    }

    handleNewTaskChange = event => {
        /** Handles changes to the input field when entering a new task name */
        this.setState({ newTask: event.target.value });
    };

    onSubmitNewTask = event => {
        /** Handles submit button when creating a new task */
        event.preventDefault();
        this.props.trelloHandler.addNewTask(
            this.props.column.id,
            this.state.newTask,
            this.props.onAddNewTask
        );
        this.setState({ addingNewTask: false, newTask: null });
    };

    render() {
        return (
            <div className="grid-item">
                <div className="card t-list">
                    <div className="card-header handle">
                        <p className="card-title">{this.props.column.name}</p>
                    </div>
                    <Droppable droppableId={this.props.column.id} type="task">
                        {(provided, snapshot) => (
                            <div
                                className="list-item-container"
                                ref={provided.innerRef}
                                {...provided.droppableProps}
                            >
                                {this.props.tasks.map((task, index) => (
                                    <ListItem
                                        key={task.id}
                                        task={task}
                                        index={index}
                                    />
                                ))}
                                {this.newTaskButton()}
                                {provided.placeholder}
                            </div>
                        )}
                    </Droppable>
                </div>
            </div>
        );
    }
}

export default TList;
