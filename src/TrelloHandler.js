class TrelloHandler {
    constructor(Trello) {
        this.Trello = Trello;
        this.authorized = false;
        this.boards = null;
        this.member = null;
        this.taskData = { tasks: {}, columns: {}, columnOrder: [] };
    }

    authorize = callback => {
        /** Authorize Trello Account. Returns true to callback if authorization successful. */
        this.Trello.authorize({
            type: 'popup',
            name: 'mello.',
            scope: {
                read: true,
                write: true
            },
            expiration: 'never',
            success: function() {
                callback(true);
                this.authorized = true;
                console.log('Authorization Successful');
            }.bind(this),
            error: function() {
                callback(false);
                console.log('Authorization Failed');
            }
        });
    };

    getMember = success => {
        /** Load Trello user data. Returns through success callback function */
        this.Trello.get(
            '/members/me',
            function(m) {
                success(m);
                console.log('User loaded succesfully');
            },
            function() {
                console.log('Failed to load member');
            }
        );
    };

    loadBoards = success => {
        /**
         * Gets user's active boards. Returns board list with success callback function.
         */
        this.Trello.get(
            '/members/me/boards?filter=open',
            function(b) {
                console.log('Boards loaded');
                success(b);
                this.boards = b;
            }.bind(this),
            function() {
                console.log('Failed to load boards');
            }
        );
    };

    getBoard = (boardID, success, deselect) => {
        /**
         * Gets Trello board object from board ID. Returns board object with success callback function.
         * Deselect called when "Select Board" default option is selected
         */
        if (boardID === '-1') {
            deselect();
            return;
        }
        this.Trello.get(
            '/boards/' + boardID,
            function(b) {
                success(b);
            },
            function() {
                console.log('Failed to get board: ' + boardID);
            }
        );
    };

    resetTaskData = () => {
        /** Reset taskData variable */
        this.taskData = { tasks: {}, columns: {}, columnOrder: [] };
    };

    getListTaskData = (boardID, success) => {
        /**
         * Gets all the lists on a given board with boardID. Return a successfully parsed lists
         * and tasks data object for Drag and Drop functionality through the success callback.
         */
        this.resetTaskData();

        this.Trello.get(
            '/boards/' + boardID + '/lists',
            function(lists) {
                console.log('Lists loaded succesfully');
                this.getTasksFromLists(lists, success);
            }.bind(this),
            function() {
                console.log('Failed to load lists');
            }
        );
    };

    getTasksFromLists = (lists, success) => {
        /**
         * Gets all the tasks from a set of lists from the lists argument. Return a successfully
         * parsed lists and tasks data object for Drag and Drop functionality through the success
         * callback.
         */
        if (lists.length === 0) {
            // Check if board contains lists.
            success(this.taskData);
            console.log('Successfully parsed list/task data');
        }

        // Loop through each list in the board to get and process each list's set of tasks
        console.log('Getting Tasks');
        var itemsProcessed = 0;
        lists.forEach(element => {
            this.Trello.get(
                '/lists/' + element.id + '/cards',
                function(tasks) {
                    this.processTaskData({ ...element, tasks });
                    itemsProcessed++;
                    if (itemsProcessed === lists.length) {
                        // Check if all task data has finished fetching.
                        success(this.taskData);
                        console.log('Successfully parsed list/task data');
                    }
                }.bind(this),
                function() {
                    console.log('Failed to load cards');
                }
            );
        });
    };

    processTaskData = data => {
        /**
         * Format the input task list data from fetch operations to be used by Drag and
         * Drop functionality and returns through the global taskData variable
         */
        // Generate columns data.
        this.taskData.columns[data.id] = {
            ...data,
            taskIds: []
        };
        // Generate tasks data
        data.tasks.forEach(element => {
            this.taskData.columns[data.id].taskIds.push(element.id);
            this.taskData.tasks[element.id] = { ...element };
        });
        // Generate columnOrder data
        this.taskData.columnOrder.push(data.id);
    };

    dragToNewColumn(finishID, taskID) {
        /**
         * Handles dragging a task (card) from one column (list) to a new
         * column. finishID is the destination column's Trello ID and taskID
         * is the ID of the Trello card being dragged.
         */
        this.Trello.put(
            '/cards/' + taskID + '?idList=' + finishID,
            function(r) {
                console.log('Card drag successful');
            },
            function() {
                console.log('Card drag unsuccessful');
            }
        );
    }

    addNewTask = (columnID, newTaskName, success) => {
        /**
         * Adds a new task (card) to a list. ColumnID is Trello ID of list that
         * is being added to, newTaskName is name of the new task being added,
         * and the success callback function receives the newly created Trello task
         * object.
         */
        this.Trello.post(
            '/cards?name=' + newTaskName + '&idList=' + columnID,
            function(c) {
                success(c);
                console.log('Card create successful');
            },
            function() {
                console.log('Card create unsuccessful');
            }
        );
    };
}

export default TrelloHandler;
