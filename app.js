var express = require('express');
var app = express();
var path = require('path');
app.use(express.static(__dirname + '/views'));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
const PORT = process.env.PORT || 3000;
const routes = require('./routes/routes.js');
const db = require('./database/db.js');

app.use('/',routes);

app.listen(PORT,()=>console.log(`listening on ${PORT}`));