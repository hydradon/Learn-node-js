var http = require('http');
var url = require('url');

var server = http.createServer(function(req, res){
	if(req.method == "GET"){
		res.writeHead(200, {'content-type' : 'application/json'});

		var parseReq = url.parse(req.url, true);
		var date = new Date(parseReq.query.iso);
		var result;

		if(parseReq.pathname == "/api/parsetime"){
			result = parseTime(date);
		} else if (parseReq.pathname == '/api/unixtime'){
			result = unixtime(date);
		}

		res.end(JSON.stringify(result));


	} else {
		res.end("GET request only\n");
	}
});

server.listen(process.argv[2]);

function parseTime(time){
	return {
		hour	:	time.getHours(),
		minute	:	time.getMinutes(),
		second	:	time.getSeconds()
	}
}

function unixtime(time){
	return {
		unixtime	:	time.getTime()
	}
}
