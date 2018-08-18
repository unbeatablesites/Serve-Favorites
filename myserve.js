var http = require ("http");

var fs = require ("fs");

var PORT = 7000;

var server = http.createServer(handleRequest);

function handleRequest(req,res){

var path = req.url;

switch (path){
case "/food":
case "/movies":
case "/frameworks":
	return renderHTML(path + ".html", res);

	default: renderHTML("/index.html", res);
}
}

function renderHTML(filePath, res) {
  return fs.readFile(__dirname + filePath, function(err, data) {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(data);
	});
}

server.listen(PORT, function() {
  console.log("Server is listening on PORT: " + PORT);
});