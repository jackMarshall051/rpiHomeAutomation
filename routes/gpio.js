const http = require("http");
const gpio = require("onoff").Gpio;
const io = require("socket.io")(http);

var ledPin = new gpio(4, "out");

io.sockets.on("connection", function (socket) {
    var buttonState = 0;

    socket.on("state", function (data) {
        buttonState = data;
        if (buttonState != ledPin.readSync()) {
            ledPin.writeSync(buttonState);
        }
    });
});