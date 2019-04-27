var http = require('http');

var planets = ["mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune"];

var handleRequest = function(request, response) {
  console.log('Received request for URL: ' + request.url);
  response.writeHead(200);
  var planet = planets[Math.floor(Math.random() * planets.length)];
  response.end(planet);
};
var www = http.createServer(handleRequest);
www.listen(8080);