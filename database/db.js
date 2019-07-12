var db = require('mongodb').MongoClient;

console.log("heyo wuddup");

db.connect("mongodb+srv://muhcow:Globby1998@cluster0-33wap.mongodb.net/test?retryWrites=true&w=majority",{useNewUrlParser: true }, function(err, db) {
    if (err) throw err;
    console.log("Database connected!");
    db.close();
  });

  module.exports = db;