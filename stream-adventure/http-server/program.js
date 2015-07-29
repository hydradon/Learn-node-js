var through = require('through2');
var http = require('http');

var stream = through(function write(buf, _, next){
	this.push(buf.toString().toUpperCase());
	next();
}, function end(done){
	done();
});

var server = http.createServer(function(req, res){
	if (req.method == "POST"){
		req.pipe(stream).pipe(res);
	} else {
		res.end("POST request only\n");
	}
});

server.listen(process.argv[2]);
