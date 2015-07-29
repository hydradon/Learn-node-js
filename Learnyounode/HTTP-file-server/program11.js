var http = require('http');
var fs = require('fs');

var myServer = http.createServer(function (req, res){
	res.writeHead(200, {'content-type' : 'text/plain'});

	var readStream = fs.createReadStream(process.argv[3]);

	readStream.on('open', function(){
		readStream.pipe(res);
	}).on('error', function(err){
		res.end(err);
	});
});

myServer.listen(process.argv[2]);
