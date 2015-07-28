var net = require('net');
var port = process.argv[2];
var date = null;

var myServer = net.createServer(function(socket){

	socket.end(today(date) + '\n');
})

myServer.listen(port)

function today(date){
	date = new Date();
	return  date.getFullYear() + '-'
			+ appendZero(date.getMonth()+1) + '-'
			+ appendZero(date.getDate()) + ' '
			+ appendZero(date.getHours()) + ':'
			+ appendZero(date.getMinutes());
}

function appendZero(num){
	return num < 10 ? ("0" + num) : num;
}
