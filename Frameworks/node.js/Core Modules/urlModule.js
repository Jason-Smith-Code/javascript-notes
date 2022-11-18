var http = require("http");
var url = require("url");

const server = http.createServer(function (req, res) {
  res.writeHead(200, { "Content-Type": "text/html" });
  var q = url.parse(req.url, true).query;
  var txt = q.year + " " + q.month;
  res.end(txt);
});
server.listen(8080);
// visit http://localhost:8080/?year=2017&month=July

// Split a web address into readable parts:

var adr = "http://localhost:8080/default.htm?year=2017&month=february";
var q = url.parse(adr, true);
console.log(q); // here we can access the url object and each of ts values through dot notation.

// url.parse() : method takes a URL string, parses it, and returns a URL object.
// url.URLSearchParams ??? Class
// url.domainToASCII() : Returns the Punycode ASCII serialization of the domain. If domain is an invalid domain, the empty string is returned.
// url.domainToUnicode() : Returns the Unicode serialization of the domain. If domain is an invalid domain, the empty string is returned.
// url.pathToFileURL() : This function ensures that path is resolved absolutely, and that the URL control characters are correctly encoded when converting into a File URL
// url.fileURLToPath() : This function ensures the correct decodings of percent-encoded characters as well as ensuring a cross-platform valid absolute path string
// url.urlToHttpOptions() : This utility function converts a URL object into an ordinary options object as expected by the http.request() and https.request() APIs
