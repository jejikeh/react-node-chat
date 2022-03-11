const express = require('express');

const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);

const rooms = new Map();

app.use(express.json());

app.get('/rooms', (req, res) => {
    rooms.set('Hello', '');
    res.json(rooms);
});

app.post('/rooms', (req, res) => {
    const { roomId, userName } = req.body;
    if (!rooms.has(roomId)) {
        rooms.set(
            roomId,
            new Map([
                ['users', new Map()],
                ['messages', []],
            ])
        );
    }
    console.log(rooms);
    res.send(rooms);
});

io.on('connection', (socket) => {
    console.log('socket connected', socket.id);
});

server.listen(9999, (error) => {
    if (error) {
        throw error;
    } else {
        console.log('Server started.............');
    }
});
