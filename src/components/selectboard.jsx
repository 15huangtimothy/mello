import React, { Component } from "react";

class SelectBoard extends Component {
    state = {};
    render() {
        return (
            <div className="container login-container">
                <div className="row">
                    <div className="col-lg-6 col-lg-offset-3 text-center center-block">
                        <h1 className="title">Boards</h1>
                        <form class="form-horizontal" id="boards_form">
                            <div class="form-group">
                                <label class="control-label">
                                    Choose your board
                                </label>
                                <select class="form-control" id="boards" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default SelectBoard;
