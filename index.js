var server = require("./server");
const db = require("./db");
var express = require("express");
var app = express();
app.use(express.json());

require("./controlleur/clients/Clients.controlleur")(app);

server.start(app);