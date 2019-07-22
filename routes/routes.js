var express = require('express');
var router = express.Router();
const request = require('request');
var animeSchema = require("../database/animeSchema.js");

//homepage route
router.get("/",function(req,res){
    //var listItems = ["hi","ok","wow"];
    animeSchema.find(function(err,data){
        if(err){console.log(err);}
        console.log(data);
        res.render('listPage',{listItems:data, searchItems:null});
    });
    
}); 

//return search results route
router.post("/search",function(req,res){
    var animeName = req.body.searchBar;
    var searchResults;
    //jikan api request
    request(`https://api.jikan.moe/v3/search/anime/1/?q=${animeName}`, { json: true }, (err, response, body) => {
        if (err) { return console.log(err); }
            //only return top 3 search results
            searchResults = body.results.slice(0,3);
            animeSchema.find(function(err,data){
            if(err){console.log(err);}
                console.log(data);
                res.render('listPage',{listItems:data, searchItems:searchResults});
                });
        });
});

//add chosen result to list in database
router.post("/add",function(req,res){
    var animeID = req.body.id;
    var newAnime = new animeSchema();
    request(`https://api.jikan.moe/v3/anime/${animeID}/`, { json: true }, (err, response, body) => {
        if (err) { return console.log(err); }
        //only return top 3 search results
        newAnime.mal_id = body.mal_id;
        newAnime.title = body.title;
        newAnime.synopsis = body.synopsis;
        newAnime.score = body.score;
        newAnime.img_url = body.image_url;
        newAnime.episodes = body.episodes;
        newAnime.save(function(err){
            if(err){
                console.log(err);
            }    
            animeSchema.find(function(err,data){
                if(err){console.log(err);}
                    console.log(data);
                    res.render('listPage',{listItems:data, searchItems:null});
            });    
         });
        });
    ;
    
});

module.exports = router;