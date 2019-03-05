import React, { Component } from 'react';
import { Droppable } from 'react-beautiful-dnd';
import ListItem from './ListItem/ListItem';
import './TList.css';

class TList extends Component {
    state = { addingNewTask: false, newTask: null, open: 'hidden' };

    componentDidMount() {
        this.setState({ open: 'visible' });
    }

    componentWillUnmount() {
        document.removeEventListener('mousedown', this.handleClick, false);
        document.removeEventListener('keydown', this.handleKeyDown, false);
    }

    newTaskButton() {
        /**
         * Conditionally generates and returns the add new task button
         * or input field for entering a new task name.
         */
        document.removeEventListener('mousedown', this.handleClick, false);
        document.removeEventListener('keydown', this.handleKeyDown, false);
        if (this.state.addingNewTask) {
            // Add listeners to detect when to exit form.
            document.addEventListener('mousedown', this.handleClick, false);
            document.addEventListener('keydown', this.handleKeyDown, false);
            return (
                <form
                    className="new-task-container"
                    ref={node => (this.node = node)}
                    onSubmit={this.onSubmitNewTask}
                >
                    <input
                        className="form-control new-task-input"
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
                        title="Add New Task"
                        onClick={() => {
                            this.setState({ addingNewTask: true });
                        }}
                    >
                        <i className="material-icons add-icon">add</i>
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
        if (!this.state.newTask) {
            return;
        }
        this.props.trelloHandler.addNewTask(
            this.props.column.id,
            this.state.newTask,
            this.props.onAddNewTask
        );
        this.setState({ addingNewTask: false, newTask: null });
    };

    handleClick = e => {
        if (!this.node.contains(e.target)) {
            // Checks if click is outside of component area
            this.exitForm();
        }
    };

    exitForm = () => {
        /**
         * Exits form to add a new task when escape is pressed or mouse
         * is clicked outside of component area.
         */
        this.setState({ addingNewTask: false, newTask: null });
    };

    handleKeyDown = e => {
        if (e.keyCode === 27) {
            // Detects escape key button presses
            this.exitForm();
        }
    };

    render() {
        return (
            <div className="grid-item">
                <div className={'card t-list ' + this.state.open}>
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
                                        onDeleteTask={this.props.onDeleteTask}
                                    />
                                ))}
                                {provided.placeholder}
                                {this.newTaskButton()}
                            </div>
                        )}
                    </Droppable>
                </div>
            </div>
        );
    }
}

export default TList;
