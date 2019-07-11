var express = require('express');
var app = express();
var path = require('path');
//var ejs = require('ejs');
app.use(express.static(__dirname + '/views'));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
const PORT = process.env.PORT || 3000;

app.listen(PORT,()=>console.log(`listening on ${PORT}`));

app.get("/",function(req,res){
    //res.send("heyo wuddup");
    //res.send("assets/listPage.html");
    //res.sendFile(path.join(__dirname + '/assets/listPage.html'));
    var listItems = ["hi","ok","wow"];
    res.render('listPage',{listItems:listItems});
}); 

console.log("yo wuddup");