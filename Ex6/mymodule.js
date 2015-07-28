var fs = require('fs')
var path = require('path')

module.exports = function(dirName, extention, callback){
  extention = '.' + extention;

  fs.readdir(dirName, function(err,data){
    if (err){
      return callback(err);
    } else {
      var filteredArray = [];

      data.forEach(function(file){
        if (path.extname(file) === extention){
          filteredArray.push(file);
        }
      });

      return callback(null, filteredArray);
    }
  });
}
