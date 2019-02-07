import React, { Component } from "react";
import { Droppable, Draggable } from "react-beautiful-dnd";
import ListItem from "./ListItem/ListItem";
import "./TList.css";

class TList extends Component {
    state = {};

    render() {
        return (
            <div className="card t-list">
                <div className="card-header">
                    <h3>Hi</h3>
                </div>
                <Droppable droppableId={this.props.column.id}>
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
        );
    }
}

export default TList;
