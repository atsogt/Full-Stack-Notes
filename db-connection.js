const { MongoClient, ObjectId } = require("mongodb-legacy");
const connectionURL = "mongodb://127.0.0.1:27017";

MongoClient.connect(connectionURL, (error, client) => {
  const db = client.db("task-manager");
});
