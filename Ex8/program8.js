var http = require('http');
var result = '';

http.get(process.argv[2], function (response){
  response.setEncoding('utf8');

  response.on('data', function (data){
      result += data;
  }).on('end', function(){
      console.log(result.length);
      console.log(result);
  });
});
