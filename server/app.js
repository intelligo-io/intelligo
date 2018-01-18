var express = require("express");

// Root Express App

var app = express();

// Sub-Apps

var api     = require("../api/app");
var bot     = require("../bot/app");
var console = require("../console/app");
var url     = require("../shorter/app");
var errors  = require("../errors/app");
var analytic  = require("../analytic/app");
var uptime  = require("../uptime/app");

app.use("/", console);
app.use("/bot", bot);
app.use("/api", api);
app.use("/url", url);
app.use("/analytic", analytic);
app.use("/uptime", uptime);
app.use(errors);

module.exports = app;