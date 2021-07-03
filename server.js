// Setup empty JS object to act as endpoint for all routes
projectData = {};

const bodyParser = require('body-parser')
// Require Express to run server and routes
const express = require('express')
// Start up an instance of app
const app = express()
/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require('cors')
app.use(cors())
// Initialize the main project folder
app.use(express.static('website'));


// Setup Server

const port = 3000;
/* Spin up the server*/
const server = app.listen(port, listening);

function listening() {
    // console.log(server);
    console.log(`running on localhost: ${port}`);
};

// GET route
app.get('/all', sendData);

function sendData(req, res) {
    res.send(projectData);
};

// POST route
app.post('/add', storeData);

function storeData(req, res) {
    const {
        temperature,
        date,
        userResponse
    } = req.body;
    
    console.log(req.body);

    projectData.temperature = temperature
    projectData.date = date
    projectData.userResponse = userResponse

    // res.send('POST received');
    res.send(projectData);
};