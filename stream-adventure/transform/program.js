var through = require('through2');                                                   
var fs = require('fs');
var to_be_upped = through(write, end);
function write(data) {
  var data_upped = data.toString().toUpperCase();
  this.queue(data_upped);
}

function end () {
  this.queue(null);
}
process.stdin.pipe(to_be_upped).pipe(process.stdout);
