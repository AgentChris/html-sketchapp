var io = require('socket.io-client');

const socket = io('http://localhost:3001');

console.log("send update 8");
socket.emit("update sketch", "update");
console.log("send update done");
// setTimeout(function () {
//   process.exit(0);
// }, 500);
