const mongoose = require("mongoose");
const url = "mongodb://localhost:27017/nodetrainingwithmongo";

const db = {};
db.mongoose = mongoose;
db.url = url;

db.user = require("./user.js")(mongoose);
db.exam = require("./exam.js")(mongoose);
db.Product = require("./product");
db.Review = require("./review");
db.Color = require("./color");
// db.question = require("./question.js")(mongoose);
// db.exam_question = require("./exam_question.js")(mongoose);

// module.exports = {
//     Product: require("./product"),
//     Review: require("./review")
// };

module.exports = db;