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
         * Gets user's active boards. success is callback function that takes
         * board list argument.
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
}

export default TrelloHandler;
