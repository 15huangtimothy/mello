import React, { Component } from 'react';
import { DragDropContext } from 'react-beautiful-dnd';
import TList from './TList/TList';
import './Board.css';

const Packery = window.Packery;
const Draggabilly = window.Draggabilly;

class Board extends Component {
    state = {
        data: this.props.lists,
        pckry: null
    };

    componentDidMount() {
        // Set up Packery and Draggabilly
        var elem = document.querySelector('.grid');
        var pckry = new Packery(elem, {
            itemSelector: '.grid-item',
            columnWidth: '.grid-sizer',
            gutter: '.gutter-sizer',
            percentPosition: true
        });
        this.setState({ pckry: pckry });
        pckry.getItemElements().forEach(function(itemElem) {
            var draggie = new Draggabilly(itemElem, { handle: '.handle' });
            pckry.bindDraggabillyEvents(draggie);
        });
        pckry.layout();
    }

    compomentDidUnmount() {
        this.state.pckry.destroy();
    }

    componentDidUpdate() {
        if (this.state.pckry) {
            this.state.pckry.reloadItems();
            this.state.pckry.layout();
        }
    }

    addNewTask = task => {
        /**
         * Handles when a new task is added to a lsit. Updates
         * the state list data with new task included.
         */
        let newData = { ...this.state.data };
        newData.columns[task.idList].taskIds.push(task.id);
        newData.tasks[task.id] = { ...task };
        this.setState({ data: newData });
    };

    deleteTask = task => {
        /**
         * Handles when a task is to be deleted.
         */
        this.props.trelloHandler.deleteTask(
            task.idList,
            task.id,
            this.taskDeleted
        );
    };

    taskDeleted = (columnID, taskID) => {
        /**
         * Executes when a task is deleted. Updates the state list
         * data to remove the task. columnID is id of column containing
         * deleted task and taskID is the deleted task's id.
         */
        const start = this.state.data.columns[columnID];
        const startTaskIds = Array.from(start.taskIds);

        startTaskIds.splice(startTaskIds.indexOf(taskID), 1);
        const newStart = {
            ...start,
            taskIds: startTaskIds
        };
        const newData = {
            ...this.state.data,
            columns: {
                ...this.state.data.columns,
                [newStart.id]: newStart
            }
        };
        this.setState({ data: newData });
    };

    onDragEnd = result => {
        /** Handle drag for list items */
        const { destination, source, draggableId } = result;

        if (!destination) {
            // If dragged out of area
            return;
        }
        if (
            destination.droppableId === source.droppableId &&
            destination.index === source.index
        ) {
            // If dragged back to same place
            return;
        }

        const start = this.state.data.columns[source.droppableId];
        const finish = this.state.data.columns[destination.droppableId];

        // Change starting column
        const startTaskIds = Array.from(start.taskIds);
        startTaskIds.splice(source.index, 1);
        const newStart = {
            ...start,
            taskIds: startTaskIds
        };

        if (start === finish) {
            // If drag is within same column
            startTaskIds.splice(destination.index, 0, draggableId);
            const newData = {
                ...this.state.data,
                columns: {
                    ...this.state.data.columns,
                    [newStart.id]: newStart
                }
            };
            this.setState({ data: newData });
        } else {
            // If drag is to a different column
            const finishTaskIds = Array.from(finish.taskIds);
            finishTaskIds.splice(destination.index, 0, draggableId);
            const newFinish = {
                ...finish,
                taskIds: finishTaskIds
            };
            const newData = {
                ...this.state.data,
                columns: {
                    ...this.state.data.columns,
                    [newStart.id]: newStart,
                    [newFinish.id]: newFinish
                }
            };
            this.setState({ data: newData });
            this.props.trelloHandler.dragToNewColumn(finish.id, draggableId);
        }
    };

    render() {
        if (this.state.data) {
            return (
                <DragDropContext onDragEnd={this.onDragEnd}>
                    <div className="container container-board">
                        <div className="grid">
                            <div className="gutter-sizer" />
                            <div className="grid-sizer" />
                            {this.state.data.columnOrder.map(
                                (columnId, index) => {
                                    const column = this.state.data.columns[
                                        columnId
                                    ];
                                    const tasks = column.taskIds.map(
                                        taskId => this.state.data.tasks[taskId]
                                    );
                                    return (
                                        <TList
                                            key={column.id}
                                            column={column}
                                            tasks={tasks}
                                            index={index}
                                            trelloHandler={
                                                this.props.trelloHandler
                                            }
                                            onAddNewTask={this.addNewTask}
                                            onDeleteTask={this.deleteTask}
                                        />
                                    );
                                }
                            )}
                        </div>
                    </div>
                </DragDropContext>
            );
        }
        return null;
    }
}

export default Board;
