// deprecated

var mongoose = require('mongoose');
 
var DiarySchema = mongoose.Schema({
      user: {type:String, required:false},
      entry: {type:String, required:false},
      createdAt:{type:Date, default:Date.now}
    });
 
    // compile schema to model
    var Diary = mongoose.model('Diary', DiarySchema);
 
    // a document instance
    //var testEntry = new Diary({ entry: 'Introduction to Mongoose'});
 
    // save model to database
    //testEntry.save(function (err, diary) {
    //  if (err) return console.error(err);
    //  console.log("collection.");
//});
module.exports = Diary;