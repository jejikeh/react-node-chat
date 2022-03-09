const express = require('express');

const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);

const rooms = new Map();

app.get('/rooms', (req, res) => {
    rooms.set('Hello', '');
    res.json(rooms);
});

io.on('connection', (socket) => {
    console.log('socket connected', socket.id);
});

server.listen(1337, (error) => {
    if (error) {
        throw error;
    } else {
        console.log('Server started.............');
    }
});
