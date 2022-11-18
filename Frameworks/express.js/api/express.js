// importing / requiring express
import express, { application } from "express"; // <- we will use this method of importing
// var express = require("express");

// creates an express application. The express() function is a top-level function exported by the express module.
var app = express();

// PROPERTIES

// app.locals : Once set, the value of app.locals properties persist throughout the life of the application,

// app.mountpath

// EVENTS

// app.on()
// app.on();

// METHODS

// app.all()
// app.delete()
// app.disable()
// app.disabled()
// app.enable()
// app.enabled()
// app.engine()
// app.get()

// app.listen() : Binds and listens for connections on the specified host and port. If port is omitted or is 0, the operating system will assign an arbitrary unused port.
app.listen(3000); // pass in a port number

// app.METHOD()
// app.param()
// app.path()

// app.post() : Routes HTTP POST requests to the specified path with the specified callback functions.
app.post("/", (req, res) => {
  res.send("POST request to homepage");
});

// app.put() : Routes HTTP PUT requests to the specified path with the specified callback functions.
// app.put(path, callback [, callback ...])

app.put("/", (req, res) => {
  res.send("PUT request to homepage");
});

// app.render() : Returns the rendered HTML of a view via the callback function. It accepts an optional parameter that is an object containing local variables for the view
app.render("email", (err, html) => {
  // ...
});

// app.route()
// app.set()

// app.use() : executes a specified middleware function when the path matches the base path
app.use(function (req, res, next) {
  console.log("hello?");
  next();
});
// ^ when you visit http://localhost:3000/ the console will log "hello?" here in output.
