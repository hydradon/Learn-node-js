var http = require('http');
var map = require('through2-map');

var server = http.createServer(function(req, res){
	res.writeHead(200, {'content-type' : 'text/plain'});

	if (req.method != "POST"){
		return res.end('POST request only\n');
	}

	req.pipe(map(function(data){
		return data.toString().toUpperCase();
	})).pipe(res);
});

server.listen(process.argv[2]);
