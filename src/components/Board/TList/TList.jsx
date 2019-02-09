import React, { Component } from "react";
import { Droppable, Draggable } from "react-beautiful-dnd";
import ListItem from "./ListItem/ListItem";
import "./TList.css";

class TList extends Component {
    state = {};

    render() {
        return (
            <Draggable
                draggableId={this.props.column.id}
                index={this.props.index}
            >
                {provided => (
                    <div
                        className="card t-list"
                        {...provided.draggableProps}
                        ref={provided.innerRef}
                    >
                        <div
                            className="card-header"
                            {...provided.dragHandleProps}
                        >
                            <p>{this.props.column.name}</p>
                        </div>
                        <Droppable
                            droppableId={this.props.column.id}
                            type="task"
                        >
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
                                    {provided.placeholder}
                                </div>
                            )}
                        </Droppable>
                    </div>
                )}
            </Draggable>
        );
    }
}

export default TList;
