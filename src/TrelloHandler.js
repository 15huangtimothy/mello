class TrelloHandler {
    constructor(Trello) {
        this.Trello = Trello;
        this.authorized = false;
        this.boards = null;
    }

    authorize = callback => {
        /** Authorize Trello Account. Returns true to callback if authorization successful. */
        this.Trello.authorize({
            type: "popup",
            name: "mello",
            scope: {
                read: true,
                write: true
            },
            expiration: "never",
            success: function() {
                callback(true);
                this.authorized = true;
                console.log("Authorization Successful");
            }.bind(this),
            error: function() {
                callback(false);
                console.log("Authorization Failed");
            }
        });
    };

    loadBoards = success => {
        /**
         * Gets user's active boards. Returns board list with success callback function.
         */
        this.Trello.get(
            "/members/me/boards?filter=open",
            function(b) {
                console.log("Boards loaded");
                success(b);
                this.boards = b;
            }.bind(this),
            function() {
                console.log("Failed to load boards");
            }
        );
    };

    getBoard = (boardID, success) => {
        /**
         * Gets Trello board object from board ID. Returns board object with success callback function.
         */
        if (boardID === "-1") {
            return;
        }
        this.Trello.get(
            "/boards/" + boardID,
            function(b) {
                success(b);
            },
            function() {
                console.log("Failed to get board: " + boardID);
            }
        );
    };
}

export default TrelloHandler;
