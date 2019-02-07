class TrelloHandler {
    constructor(Trello) {
        this.Trello = Trello;
        this.authorized = false;
        this.boards = null;
        this.member = null;
    }

    authorize = callback => {
        /** Authorize Trello Account. Returns true to callback if authorization successful. */
        this.Trello.authorize({
            type: "popup",
            name: "mello.",
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

    getMember = success => {
        /** Load Trello user data. Returns through success callback function */
        this.Trello.get(
            "/members/me",
            function(m) {
                success(m);
                console.log("Member loaded succesfully");
            },
            function() {
                console.log("Failed to load member");
            }
        );
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

    getBoard = (boardID, success, deselect) => {
        /**
         * Gets Trello board object from board ID. Returns board object with success callback function.
         * Deselect called when "Select Board" default option is selected
         */
        if (boardID === "-1") {
            deselect();
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
