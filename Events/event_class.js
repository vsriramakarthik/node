const EventEmitter = require("events");
const emitter = new EventEmitter();

class person extends EventEmitter {
  constructor(name) {
    super();
    this._name = name;
  }
  get name() {
    return this._name;
  }
}
let ped = new person("ped");
ped.on("name", () => {
  console.log("my name is" + ped.name);
});

ped.emit("name");
