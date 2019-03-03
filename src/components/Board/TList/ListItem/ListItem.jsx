import React, { Component } from 'react';
import { Draggable } from 'react-beautiful-dnd';
import './ListItem.css';

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
                        className={
                            'list-item' +
                            (snapshot.isDragging ? ' on-drag' : '')
                        }
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        ref={provided.innerRef}
                    >
                        <p>{this.props.task.name}</p>
                        <i
                            className="far fa-check-square"
                            title="Delete Task"
                            onClick={() => {
                                this.props.onDeleteTask(this.props.task);
                            }}
                        />
                    </div>
                )}
            </Draggable>
        );
    }
}

export default ListItem;
