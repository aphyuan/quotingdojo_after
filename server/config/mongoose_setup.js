var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/quoting_dojo');

var fs = require('fs');
var path = require('path');
// go through the Models
var models_path = path.join(__dirname, '/../models');
fs.readdirSync(models_path).forEach(function(file){
  if(file.indexOf('.js')>0){
    require(models_path+'/'+file);
  }
})
