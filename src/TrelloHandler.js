class TrelloHandler {
    constructor(Trello) {
        this.Trello = Trello;
        this.authorized = false;
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
            },
            error: function() {
                callback(false);
                console.log("Authorization Failed");
            }
        });
    };

    isAuthorized() {
        return this.authorized;
    }
}

export default TrelloHandler;
