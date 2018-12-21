var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  if (req.cookies.username) {
    const name = req.cookies.username;
    res.render('index', { name });
  } else {
    res.redirect('/hello');
  }
});

/* GET hello page. */
router.get('/hello', function(req, res) {
  if (req.cookies.username) {
    res.redirect('/');
  } else {
    res.render('hello');
  }
});

/* POST hello page. */
router.post('/hello', function(req, res) {
  res.cookie('username', req.body.username);
  res.redirect('/');
});

/* POST goodbye page. */
router.post('/goodbye', function(req, res) {
  res.clearCookie('username');
  res.redirect('/hello');
});

module.exports = router;
