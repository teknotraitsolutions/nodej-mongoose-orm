const mongoose = require("mongoose");
const url = "mongodb://localhost:27017/nodetrainingwithmongo";

const db = {};
db.mongoose = mongoose;
db.url = url;

module.exports = db;