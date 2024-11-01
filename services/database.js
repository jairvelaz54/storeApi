const MongoClient = require("mongodb").MongoClient
require('dotenv').config()

var db = null;

try {
    const client = new MongoClient(process.env.CONN_STRING)
    client.connect()
    db = client.db(process.env.DB_NAME)
    console.log("Connection successfully...")
} catch (error) {
    console.log(error)
}

module.exports = db