const events = require("events");
const emitter = new events.EventEmitter();
// emitter.on("connection", () => {
//     console.log("a已连接");
// });

// emitter.prependListener("connection", () => {
//     console.log("b已连接");
// });

const cb1 = (arg1, arg2) => {
    console.log("callBack1", arg1, arg2);
}
const cb2 = (arg1, arg2) => {
    console.log("callBack2", arg1, arg2);
}
emitter.on("connection", cb1);

emitter.prependListener("connection", cb2);

setTimeout(() => {
    emitter.emit("connection", "愿善良的人", "都能被温柔以待")
}, 500)