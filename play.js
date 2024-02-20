const net = require("net");
const connect = require("./client");
const setupInput = require("./input");

console.log("Connecting ...");

setupInput(connect());     //the connection object is sent to setupInput so it can interact with the server

