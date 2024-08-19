const EventEmitter = require("events");
const emitter = new EventEmitter();

//register a listner
emitter.on("messageLogged", function (n1, n2) {
  console.log("sum:", n1 + n2);
});

//raise an event
emitter.emit("messageLogged", 1, 2);
