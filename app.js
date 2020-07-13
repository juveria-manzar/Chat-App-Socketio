const express = require('express')
const app = express();
const dateTime = require('simple-datetime-formater')
const bodyParser = require('body-parser')
const chatRouter = require('./route/chatroute')


//http module
const http = require('http').Server(app)

//socketio module for realtime-web app
const io = require('socket.io');

const port = 3000;

//bodyparser middleware
app.use(bodyParser.json())

//routes
// app.use('/chats', chatRouter)
// app.use('/login', loginRouter)

//express static middleware
app.use(express.static(__dirname + "/public"))

//integrating socketio
socket = io(http)

//database connection
// const Chat = require('./models/Chat')
// const connect = require('./dbconnect')

//setup event listener
socket.on('connection', socket => {
    console.log('user connected')

    socket.on('disconnect', () => {
        console.log('user disconnected')
    })
})

//typing
socket.on('typing', data => {
    socket.broadcast.emit('notifyingTyping', {
        user: data.user,
        message: data.message
    })
})

//stopped typing
socket.on('stopTyping', () => {
    socket.broadcast.emit("notifyStopTyping");
})

socket.on('chat message', (msg) => {
    console.log('message: ' + msg)




    //broadcast message in port:300 except yourself
    socket.broadcast.emit("received", { message: msg });
})





http.listen(port, () => {
    console.log("Running on Port: " + port);
});