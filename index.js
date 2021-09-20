const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const http = require("http");
const swaggerUi = require("swagger-ui-express");

// Creating the node server
const app = express();

app.use(cors());

app.server = http.createServer(app);

var jsonParser = bodyParser.json();
app.use(jsonParser);

//Swaggger 
const swaggerDocument = require("./config/config.json");
app.use('/api/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Define Router 
const apiRoutes = require("./routes/index");
app.use('/api', apiRoutes);

//Db connectivity
const db = require("./models/index");
const res = require("express/lib/response");
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