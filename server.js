const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const ejs = require('ejs');
const engine = require('ejs-mate');
const session = require('express-session');

const app = express();

app.engine('ejs', engine);
app.set('view engine', 'ejs');
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static('public'));

app.get('/', function (req, res, next) {
    res.render('index');
})

app.listen(3000, function () {

    console.log('Localhost working in localhost: 3000');

})
