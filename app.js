"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = __importDefault(require("http"));
http_1.default
    .createServer((req, res) => {
    res.end("hello, Ankit , What's up!");
})
    .listen(5002, () => console.log("listening to 5001."));
