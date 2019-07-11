var express = require('express');
var router = express.Router();

//homepage route
router.get("/",function(req,res){
    var listItems = ["hi","ok","wow"];
    res.render('listPage',{listItems:listItems});
}); 

module.exports = router;