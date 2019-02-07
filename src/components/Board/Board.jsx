import React, { Component } from "react";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import TList from "./TList/TList";
import "./Board.css";

import initialData from "./initial-data";

class Board extends Component {
    state = { data: initialData };

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
        }
    };

    render() {
        return (
            <DragDropContext onDragEnd={this.onDragEnd}>
                <div className="container container-board">
                    {this.state.data.columnOrder.map(columnId => {
                        const column = this.state.data.columns[columnId];
                        const tasks = column.taskIds.map(
                            taskId => this.state.data.tasks[taskId]
                        );
                        return (
                            <TList
                                key={column.id}
                                column={column}
                                tasks={tasks}
                            />
                        );
                    })}
                </div>
            </DragDropContext>
        );
    }
}

export default Board;
