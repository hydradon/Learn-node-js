var http = require('http');

var myServer = http.createServer(function(req, res){
	res.writeHead(200, {'content-type':'text/plain'});

	var body = '';
	if (req['method'] != "POST"){
		return res.end("POST request only");
	}

	req.on('data', function(data){
		body += data.toString().toUpperCase();
	}).on('end', function(){
		res.end(body);
	});
});

myServer.listen(process.argv[2]);
