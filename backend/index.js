// importing express
const express = require('express');
const cors = require('cors');
const { Server } = require("socket.io");

// intializing express server
const app = express();
const port = 5000;

app.use(cors({
    origin:['http://localhost:3000']
}))

const { createServer } = require("http");

const httpServer = createServer(app);
const io = new Server(httpServer, { /* options */ });

io.on("connection", (socket) => {
    console.log("Client connected!");
});

// middleware
// to parse json data to javascript
app.use(express.json());


// route or endpoint
app.get('/', (req, res) => {
    res.send('response from express');
})

app.get('/home', (req, res) => {
    res.send('response from home');
})

// starting the server
httpServer.listen(port, () => {
    console.log('server started');
})