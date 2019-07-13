var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var path = require('path');
app.use(express.static(__dirname + '/views'));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
const PORT = process.env.PORT || 3000;
const routes = require('./routes/routes.js');
const db = require('./database/db.js');
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({
    extended: true
  }));
app.use('/',routes);

app.listen(PORT,()=>console.log(`listening on ${PORT}`));