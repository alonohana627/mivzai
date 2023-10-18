import {App, getParts, HttpResponse, SHARED_COMPRESSOR} from "uWebSockets.js";

const uWebApp = App();

let clientsList: any[] = [];

uWebApp
    .ws("/input", {
        open: (ws) => {

        },
        message: (ws, message) => {
            for (let i = clientsList.length - 1; i >= 0; i--) {
                clientsList[i].send(message);
            }
            // const a = ws.publish("output", message.toString(), false)
            // console.log("Message Sent", a)
        },
        drain: (ws) => {

        },
        close: (ws, code, message) => {
            /* The library guarantees proper unsubscription at close */
        }
    }).ws("/", {
    open: (ws) => {
        clientsList.push(ws);
    }, message: (ws, message) => {
        console.log(message)
    }, close: (ws) => {
        const index = clientsList.indexOf(ws);
        if (index !== -1) {
            clientsList.splice(index, 1);
        }
    }
}).listen(7000, () => {
    console.log("7000")
})