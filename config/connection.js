const { connect, connection } = require("mongoose");

// Connection string to local instance of mongoDB including database name.
const connectionString = "mongodb://localhost:27017/networkDB";

// Creates a connection to mongodb instance
connect(connectionString, {
    // Sets the connection string parser and Server Discover and Monitoring engine to true and avoid warning
    useNewUrlParser: true,
    useUnifiedTopology: true
});

module.exports = connection;