const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const http = require("http");

// Creating the node server
const app = express();

app.use(cors());

app.server = http.createServer(app);

var jsonParser = bodyParser.json();
app.use(jsonParser);


//Db connectivity
const db = require("./models/index");
db.mongoose.connect(db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Connected to DB");
}).catch(err => {
    console.log("Error While Connecting to DB");
    process.exit();
});


let portno = process.env.NODE_PORT || 3000;
app.listen(portno, (req, res) => {
    console.log(`The server is running on the port ${portno}`)
});