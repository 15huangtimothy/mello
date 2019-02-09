import React, { Component } from "react";
import { Draggable } from "react-beautiful-dnd";
import "./ListItem.css";

class ListItem extends Component {
    state = {};

    onDragUpdate() {
        console.log("hii");
    }

    render() {
        return (
            <Draggable
                draggableId={this.props.task.id}
                index={this.props.index}
                onDragUpdate={this.onDragUpdate}
            >
                {(provided, snapshot) => (
                    <div
                        className={
                            "list-item" +
                            (snapshot.isDragging ? " drag-shadow" : "")
                        }
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        ref={provided.innerRef}
                    >
                        {this.props.task.name}
                    </div>
                )}
            </Draggable>
        );
    }
}

export default ListItem;
