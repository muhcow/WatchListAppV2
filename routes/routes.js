var express = require('express');
var router = express.Router();
const request = require('request');

//homepage route
router.get("/",function(req,res){
    var listItems = ["hi","ok","wow"];
    res.render('listPage',{listItems:listItems});
}); 

//return search results route
router.post("/search",function(req,res){
    console.log(req.body);
    var animeName = req.body.searchBar;
    var searchResults;
    //jikan api request
    request(`https://api.jikan.moe/v3/search/anime/1/?q=${animeName}`, { json: true }, (err, response, body) => {
        if (err) { return console.log(err); }
            //only return top 3 search results
            searchResults = body.results.slice(0,3);
            console.log(searchResults);
            var listItems = ["hi","ok","wow"];
            res.render('listPage',{listItems:listItems});
            //res.render('listPage',{listItems:null});
        });
});

module.exports = router;