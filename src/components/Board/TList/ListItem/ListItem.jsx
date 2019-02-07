import React, { Component } from "react";
import { Draggable } from "react-beautiful-dnd";
import "./ListItem.css";

class ListItem extends Component {
    state = {};
    render() {
        return (
            <Draggable
                draggableId={this.props.task.id}
                index={this.props.index}
            >
                {(provided, snapshot) => (
                    <div
                        className="list-item"
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        ref={provided.innerRef}
                    >
                        {this.props.task.content}
                    </div>
                )}
            </Draggable>
        );
    }
}

export default ListItem;
