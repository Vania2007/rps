console.log("client.js loaded");
const socket = io();
function createGame() {
  socket.emit("createGame");
}
function makeid(length) {
  var result = "";
  var characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  var charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    result += characters[Math.floor(Math.random() * charactersLength)];
  }
  return result;
}

