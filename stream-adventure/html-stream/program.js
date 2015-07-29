var Trumpet = require('trumpet'); //Trumpet's a Constructor function

var stdin = process.stdin,
stdout = process.stdout;

var trumpet = new Trumpet();

var loudHTMLDStream = trumpet.createStream('.loud');
loudHTMLDStream.on('data',
function(data) {
loudHTMLDStream.write(data.toString().toUpperCase());
});
loudHTMLDStream.on('end',
function(data) {
loudHTMLDStream.end();
});
stdin.pipe(trumpet).pipe(stdout);
