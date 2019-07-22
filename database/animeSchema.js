var mongoose = require('mongoose');
var Schema = mongoose.Schema;
mongoose.connect("mongodb+srv://muhcow:Globby1998@cluster0-33wap.mongodb.net/myWatchList");

var animeSchema = new Schema({
    "mal_id": String,
    "title":String,
    "synopsis": String,
    "score": String,
    "img_url": String,
    "episodes": String
  });

var animeModel = mongoose.model("animeModel",animeSchema);

module.exports = animeModel;