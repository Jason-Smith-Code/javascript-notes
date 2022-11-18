// HTTP module
// https://www.w3schools.com/nodejs/nodejs_http.asp

const http = require("http");

//console.log(http);
// with the file system you can:
// create a server,

// Methods

// http.Agent : Class

// http.ClientRequest : "request" parameter

// http.IncomingMessage;
// http.OutgoingMessage;

// http.Server : Class
// server methods
// server.close() : Stops the server from accepting new connections and closes all connections connected to this server which are not sending a request or waiting for a response
// server.closeAllConnections()
// server.closeIdleConnections()

// http.ServerResponse : "response" parameter
// response methods:
// response.addTrailers()	: Adds HTTP trailing headers
// response.end()	: Signals that the the server should consider that the response is complete
// response.finished: Returns true if the response is complete, otherwise false
// response.getHeader() : Returns the value of the specified header
// response.headersSent	: Returns true if headers were sent, otherwise false
// response.removeHeader() : Removes the specified header
// response.sendDate : Set to false if the Date header should not be sent in the response. Default true
// response.setHeader()	: Sets the specified header
// response.setTimeout : Sets the timeout value of the socket to the specified number of milliseconds
// response.statusCode : Sets the status code that will be sent to the client
// response.statusMessage : Sets the status message that will be sent to the client
// response.write()	: Sends text, or a text stream, to the client
// response.writeContinue()	: Sends a HTTP Continue message to the client
// response.writeHead()	: Sends status and response headers to the client

// http.createServer() : create server object, The function passed into the http.createServer() method, will be executed when someone tries to access the computer on the given port.
const server = http.createServer((request, response) => {
  response.writeHead(200, { "Content-Type": "text/html" }); // add a header to the response, determine what type the response is, in this case its text/html
  response.write("hello"); // write a response to the client
  // add conditions

  if (request.url == "/") {
    response.write("home page");
  } else {
    response.write("not home page");
  }

  console.log(request.url); // returns what ever comes after the current url starting with "/"
  response.end(); //end the response, can be empty, or can contain a variable to end the response with.
});

server.listen(6600);

// http.validateHeaderName;
// http.validateHeaderValue;
// http.get;
// http.request;
// http.maxHeaderSize;
// http.globalAgent;

const METHODS = [
  "ACL",
  "BIND",
  "CHECKOUT",
  "CONNECT",
  "COPY",
  "DELETE",
  "GET",
  "HEAD",
  "LINK",
  "LOCK",
  "M-SEARCH",
  "MERGE",
  "MKACTIVITY",
  "MKCALENDAR",
  "MKCOL",
  "MOVE",
  "NOTIFY",
  "OPTIONS",
  "PATCH",
  "POST",
  "PROPFIND",
  "PROPPATCH",
  "PURGE",
  "PUT",
  "REBIND",
  "REPORT",
  "SEARCH",
  "SOURCE",
  "SUBSCRIBE",
  "TRACE",
  "UNBIND",
  "UNLINK",
  "UNLOCK",
  "UNSUBSCRIBE",
];

let STATUS_CODES = {
  100: "Continue",
  101: "Switching Protocols",
  102: "Processing",
  103: "Early Hints",
  200: "OK",
  201: "Created",
  202: "Accepted",
  203: "Non-Authoritative Information",
  204: "No Content",
  205: "Reset Content",
  206: "Partial Content",
  207: "Multi-Status",
  208: "Already Reported",
  226: "IM Used",
  300: "Multiple Choices",
  301: "Moved Permanently",
  302: "Found",
  303: "See Other",
  304: "Not Modified",
  305: "Use Proxy",
  307: "Temporary Redirect",
  308: "Permanent Redirect",
  400: "Bad Request",
  401: "Unauthorized",
  402: "Payment Required",
  403: "Forbidden",
  404: "Not Found",
  405: "Method Not Allowed",
  406: "Not Acceptable",
  407: "Proxy Authentication Required",
  408: "Request Timeout",
  409: "Conflict",
  410: "Gone",
  411: "Length Required",
  412: "Precondition Failed",
  413: "Payload Too Large",
  414: "URI Too Long",
  415: "Unsupported Media Type",
  416: "Range Not Satisfiable",
  417: "Expectation Failed",
  418: "I'm a Teapot",
  421: "Misdirected Request",
  422: "Unprocessable Entity",
  423: "Locked",
  424: "Failed Dependency",
  425: "Too Early",
  426: "Upgrade Required",
  428: "Precondition Required",
  429: "Too Many Requests",
  431: "Request Header Fields Too Large",
  451: "Unavailable For Legal Reasons",
  500: "Internal Server Error",
  501: "Not Implemented",
  502: "Bad Gateway",
  503: "Service Unavailable",
  504: "Gateway Timeout",
  505: "HTTP Version Not Supported",
  506: "Variant Also Negotiates",
  507: "Insufficient Storage",
  508: "Loop Detected",
  509: "Bandwidth Limit Exceeded",
  510: "Not Extended",
  511: "Network Authentication Required",
};
