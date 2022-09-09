var express = require('express');
var router = express.Router();

var mysql = require('mysql');
var conn = mysql.createConnection({
  host:'localhost',
  user:'root',
  password:'',
  database:'node'
});
conn.connect();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Shreyans' });
});

router.get('/home', function(req, res, next) {
  res.render('home', { title: 'Shreyans' });
});

router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Shreyans' });
});

router.get('/about', function(req, res, next) {
  res.render('about', { title: 'Shreyans' });
});

router.get('/form', function(req, res, next) {
  res.render('form',{ title: 'Shreyans' });
});

router.post('/processing', function(req, res, next) {
  console.log(req.body);
  var s_id = parseInt(req.body.uid);
  var s_name = req.body.sname;
  var s_gen = req.body.gen;
  conn.query('INSERT into student (s_name,s_gender) values (?,?)',[s_name,s_gen], function (error, results, fields) {
    console.log(error);
    console.log(results);
    console.log(fields)
    res.render('result', {title: 'Shreyans',ansa:s_id,ansb:s_name, ansc:s_gen});
    });
    conn.end();
    
});

module.exports = router;
