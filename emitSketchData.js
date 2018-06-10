var io = require('socket.io-client');

const socket = io('http://localhost:3001');

socket.emit("update sketch", "update");
