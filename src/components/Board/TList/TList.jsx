import React, { Component } from "react";
import { Droppable } from "react-beautiful-dnd";
import ListItem from "./ListItem/ListItem";
import "./TList.css";

class TList extends Component {
    state = {};

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
