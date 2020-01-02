var data = require('./seed_data.js');
var mongoose = require('mongoose');
var Stories = require('./db/models/story.js');

mongoose.connect('mongodb://localhost/hackednews');

var seedDb = function(data) {
  data.forEach(element => {
   Stories.insertOne(element,(err,data)=>{
     if(err){
       console.log(err)
     }
   })
  })
  // your code here!
};

seedDb(data);
